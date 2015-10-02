"""
Add simple, flexible caching layer.

Uses `dogpile caching http://dogpilecache.readthedocs.org/en/latest/index.html`_.
"""
__author__ = 'Dan Gunter <dkgunter@lbl.gov>'
__date__ = '9/26/15'

## Imports
# System
import os
import requests  # for errors
import uuid
# Third-party
from dogpile.cache import make_region
from dogpile.cache.api import NO_VALUE
# Local
from doekbase.workspace import client
from doekbase.data_api.util import PerfCollector, PerfEvent

## Functions and Classes

def ref_key_generator(namespace, fn, **kw):
    """Return a function that generates a key.

    Args:
        namespace (str): Namespace for all keys
        ref (str): KBase reference
        kw (dict): Additional keywords
    Return:
        Function taking variable number of arguments, each of which
        will be converted to a string and concatenated with underscores,
        prefixed by the namespace and reference string, to create the key.
    """
    name = fn.__name__
    def generate_key(*arg):
        return namespace + "_" + name + "_".join(str(s) for s in arg)

    return generate_key

def get_redis_cache(redis_host='localhost', redis_port=6379):
    """Get a new redis cache 'region' object.

    Args:
        redis_host (str): Hostname or IP for Redis server
        redis_port (int): Redis server listening port
    Returns:
        An object, of type CacheRegion
    """
    region = make_region(
        function_key_generator=ref_key_generator
    ).configure(
        'dogpile.cache.redis',
        arguments={
            'host': redis_host,
            'port': redis_port,
            'db': 0,
            'redis_expiration_time': 60 * 60 * 2,  # 2 hours
            'distributed_lock': True
        }
    )
    return region

def get_dbm_cache(path='/tmp', name=''):
    """Get a new anydbm (DBM) cache 'region' object.

    Args:
        path (str): Path to directory with cache file
        name (str): Name of cache file. if empty a random name
                    will be generated.
    Returns:
        An object, of type CacheRegion
    """
    if not name:
        name = str(uuid.uuid1())
    filename = os.path.join(path, name)
    region = make_region(
        function_key_generator=ref_key_generator
    ).configure(
        'dogpile.cache.dbm',
        arguments={
            'filename': filename
        }
    )
    return region

class WorkspaceCached(client.Workspace):
    """Caching version of workspace client.

    Should be 100% backwards-compatible with the standard client.

    In addition, this class provides some basic performance information
    for each of its operations.
    """
    class ConnectionError(Exception):
        def __init__(self, *args):
            Exception.__init__(self, *args)

    def __init__(self, cache_create_fn, cache_params={}, **workspace_kw):
        super(WorkspaceCached, self).__init__(**workspace_kw)
        self._cache = cache_create_fn(**cache_params)
        self._get_ref_from_params = lambda p: p['objects'][0]['ref']
        self._stats = PerfCollector(self.__class__.__name__)

    def _should_cache(self, ref):
        # TODO: See whether this is 'reference data' or not
        return True

    @property
    def stats(self):
        return self._stats

    def _call_ws(self, method, *args):
        try:
            return method(*args)
        except (requests.ConnectionError, client.ServerError) as err:
            raise self.ConnectionError(err)

    def get_object(self, params):
        """Get (possibly cached) object.

        Returns:
           Single object instance
        Raises:
           self.ConnectionError
        """
        self._call_ws(self._get_object, params)

    def _get_object(self, params):
        ref = self._get_ref_from_params(params)
        self._stats.start_event('get_objects', ref)  # see get_objects()
        should_cache = self._should_cache(ref)
        was_in_cache = False
        if should_cache:
            obj = self._cache.get(ref)
            if obj is NO_VALUE:
                obj = client.Workspace.get_object(self, params)
                self._cache.set(ref, obj)
            else:
                was_in_cache = True
        else:
            obj = super(WorkspaceCached, self).get_object(params)
        self._stats.end_event('get_objects', ref, num=1, num_cached=int(
            was_in_cache))
        return obj

    def get_objects(self, object_ids):
        """Get one or more (possibly cached) objects.

        Args:
            object_ids: List of references
        Returns:
            list of object instances
        """
        self._call_ws(self._get_objects, object_ids)

    def _get_objects(self, object_ids):
        objkey = ';'.join(object_ids)
        self._stats.start_event('get_objects', objkey)
        if len(object_ids) == 0:
            self._stats.end_event('get_objects', objkey, num_cached=0, num=0)
            return []
        result, gaps, cacheable = [], [], []
        # pull what we can from cache, add indexes to gaps
        # list for those we don't have
        for i, ref in enumerate(object_ids):
            should_cache = self._should_cache(ref)
            if should_cache:
                obj = self._cache.get(ref)
                if obj is NO_VALUE:
                    gaps.append(i)
                else:
                    result.append(obj)
            else:
                gaps.append(i)
            cacheable.append(should_cache)
        # fill in missing objects
        if len(gaps) > 0:
            # get all the missing objects at once
            missing_ids = [object_ids[i] for i in gaps]
            result2 = super(WorkspaceCached, self).get_objects(missing_ids)
            # fill objects into gaps
            if len(gaps) == len(object_ids):  # nothing came from cache
                result = result2
            else:
                for index, item in zip(gaps, result2):
                    result[index] = item
        # cache all results
        for i in range(len(object_ids)):
            if cacheable[i]:
                self._cache.set(object_ids[i], result[i])
        self._stats.end_event('get_objects', objkey, num=len(
            object_ids), num_cached=len(
            object_ids) - len(gaps))


