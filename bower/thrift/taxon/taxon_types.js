/*global define */
/*jslint white:true */
define(["thrift"], function (Thrift) {
"use strict";
//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


var taxon = {};

taxon.ObjectInfo = function(args) {
  this.object_id = null;
  this.object_name = null;
  this.object_reference = null;
  this.object_reference_versioned = null;
  this.type_string = null;
  this.save_date = null;
  this.version = null;
  this.saved_by = null;
  this.workspace_id = null;
  this.workspace_name = null;
  this.object_checksum = null;
  this.object_size = null;
  this.object_metadata = null;
  if (args) {
    if (args.object_id !== undefined) {
      this.object_id = args.object_id;
    }
    if (args.object_name !== undefined) {
      this.object_name = args.object_name;
    }
    if (args.object_reference !== undefined) {
      this.object_reference = args.object_reference;
    }
    if (args.object_reference_versioned !== undefined) {
      this.object_reference_versioned = args.object_reference_versioned;
    }
    if (args.type_string !== undefined) {
      this.type_string = args.type_string;
    }
    if (args.save_date !== undefined) {
      this.save_date = args.save_date;
    }
    if (args.version !== undefined) {
      this.version = args.version;
    }
    if (args.saved_by !== undefined) {
      this.saved_by = args.saved_by;
    }
    if (args.workspace_id !== undefined) {
      this.workspace_id = args.workspace_id;
    }
    if (args.workspace_name !== undefined) {
      this.workspace_name = args.workspace_name;
    }
    if (args.object_checksum !== undefined) {
      this.object_checksum = args.object_checksum;
    }
    if (args.object_size !== undefined) {
      this.object_size = args.object_size;
    }
    if (args.object_metadata !== undefined) {
      this.object_metadata = args.object_metadata;
    }
  }
};
taxon.ObjectInfo.prototype = {};
taxon.ObjectInfo.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype === Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype === Thrift.Type.I64) {
        this.object_id = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype === Thrift.Type.STRING) {
        this.object_name = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype === Thrift.Type.STRING) {
        this.object_reference = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype === Thrift.Type.STRING) {
        this.object_reference_versioned = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype === Thrift.Type.STRING) {
        this.type_string = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype === Thrift.Type.STRING) {
        this.save_date = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype === Thrift.Type.I64) {
        this.version = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype === Thrift.Type.STRING) {
        this.saved_by = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype === Thrift.Type.I64) {
        this.workspace_id = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype === Thrift.Type.STRING) {
        this.workspace_name = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype === Thrift.Type.STRING) {
        this.object_checksum = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype === Thrift.Type.I64) {
        this.object_size = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 13:
      if (ftype === Thrift.Type.MAP) {
        var _size0 = 0;
        var _rtmp34;
        this.object_metadata = {};
        var _ktype1 = 0;
        var _vtype2 = 0;
        _rtmp34 = input.readMapBegin();
        _ktype1 = _rtmp34.ktype;
        _vtype2 = _rtmp34.vtype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          if (_i5 > 0 ) {
            if (input.rstack.length > input.rpos[input.rpos.length -1] + 1) {
              input.rstack.pop();
            }
          }
          var key6 = null;
          var val7 = null;
          key6 = input.readString().value;
          val7 = input.readString().value;
          this.object_metadata[key6] = val7;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

taxon.ObjectInfo.prototype.write = function(output) {
  output.writeStructBegin('ObjectInfo');
  if (this.object_id !== null && this.object_id !== undefined) {
    output.writeFieldBegin('object_id', Thrift.Type.I64, 1);
    output.writeI64(this.object_id);
    output.writeFieldEnd();
  }
  if (this.object_name !== null && this.object_name !== undefined) {
    output.writeFieldBegin('object_name', Thrift.Type.STRING, 2);
    output.writeString(this.object_name);
    output.writeFieldEnd();
  }
  if (this.object_reference !== null && this.object_reference !== undefined) {
    output.writeFieldBegin('object_reference', Thrift.Type.STRING, 3);
    output.writeString(this.object_reference);
    output.writeFieldEnd();
  }
  if (this.object_reference_versioned !== null && this.object_reference_versioned !== undefined) {
    output.writeFieldBegin('object_reference_versioned', Thrift.Type.STRING, 4);
    output.writeString(this.object_reference_versioned);
    output.writeFieldEnd();
  }
  if (this.type_string !== null && this.type_string !== undefined) {
    output.writeFieldBegin('type_string', Thrift.Type.STRING, 5);
    output.writeString(this.type_string);
    output.writeFieldEnd();
  }
  if (this.save_date !== null && this.save_date !== undefined) {
    output.writeFieldBegin('save_date', Thrift.Type.STRING, 6);
    output.writeString(this.save_date);
    output.writeFieldEnd();
  }
  if (this.version !== null && this.version !== undefined) {
    output.writeFieldBegin('version', Thrift.Type.I64, 7);
    output.writeI64(this.version);
    output.writeFieldEnd();
  }
  if (this.saved_by !== null && this.saved_by !== undefined) {
    output.writeFieldBegin('saved_by', Thrift.Type.STRING, 8);
    output.writeString(this.saved_by);
    output.writeFieldEnd();
  }
  if (this.workspace_id !== null && this.workspace_id !== undefined) {
    output.writeFieldBegin('workspace_id', Thrift.Type.I64, 9);
    output.writeI64(this.workspace_id);
    output.writeFieldEnd();
  }
  if (this.workspace_name !== null && this.workspace_name !== undefined) {
    output.writeFieldBegin('workspace_name', Thrift.Type.STRING, 10);
    output.writeString(this.workspace_name);
    output.writeFieldEnd();
  }
  if (this.object_checksum !== null && this.object_checksum !== undefined) {
    output.writeFieldBegin('object_checksum', Thrift.Type.STRING, 11);
    output.writeString(this.object_checksum);
    output.writeFieldEnd();
  }
  if (this.object_size !== null && this.object_size !== undefined) {
    output.writeFieldBegin('object_size', Thrift.Type.I64, 12);
    output.writeI64(this.object_size);
    output.writeFieldEnd();
  }
  if (this.object_metadata !== null && this.object_metadata !== undefined) {
    output.writeFieldBegin('object_metadata', Thrift.Type.MAP, 13);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.object_metadata));
    for (var kiter8 in this.object_metadata)
    {
      if (this.object_metadata.hasOwnProperty(kiter8))
      {
        var viter9 = this.object_metadata[kiter8];
        output.writeString(kiter8);
        output.writeString(viter9);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

taxon.ExternalDataUnit = function(args) {
  this.resource_name = null;
  this.resource_url = null;
  this.resource_version = null;
  this.resource_release_date = null;
  this.data_url = null;
  this.data_id = null;
  this.description = null;
  if (args) {
    if (args.resource_name !== undefined) {
      this.resource_name = args.resource_name;
    }
    if (args.resource_url !== undefined) {
      this.resource_url = args.resource_url;
    }
    if (args.resource_version !== undefined) {
      this.resource_version = args.resource_version;
    }
    if (args.resource_release_date !== undefined) {
      this.resource_release_date = args.resource_release_date;
    }
    if (args.data_url !== undefined) {
      this.data_url = args.data_url;
    }
    if (args.data_id !== undefined) {
      this.data_id = args.data_id;
    }
    if (args.description !== undefined) {
      this.description = args.description;
    }
  }
};
taxon.ExternalDataUnit.prototype = {};
taxon.ExternalDataUnit.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype === Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype === Thrift.Type.STRING) {
        this.resource_name = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype === Thrift.Type.STRING) {
        this.resource_url = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype === Thrift.Type.STRING) {
        this.resource_version = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype === Thrift.Type.STRING) {
        this.resource_release_date = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype === Thrift.Type.STRING) {
        this.data_url = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype === Thrift.Type.STRING) {
        this.data_id = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype === Thrift.Type.STRING) {
        this.description = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

taxon.ExternalDataUnit.prototype.write = function(output) {
  output.writeStructBegin('ExternalDataUnit');
  if (this.resource_name !== null && this.resource_name !== undefined) {
    output.writeFieldBegin('resource_name', Thrift.Type.STRING, 1);
    output.writeString(this.resource_name);
    output.writeFieldEnd();
  }
  if (this.resource_url !== null && this.resource_url !== undefined) {
    output.writeFieldBegin('resource_url', Thrift.Type.STRING, 2);
    output.writeString(this.resource_url);
    output.writeFieldEnd();
  }
  if (this.resource_version !== null && this.resource_version !== undefined) {
    output.writeFieldBegin('resource_version', Thrift.Type.STRING, 3);
    output.writeString(this.resource_version);
    output.writeFieldEnd();
  }
  if (this.resource_release_date !== null && this.resource_release_date !== undefined) {
    output.writeFieldBegin('resource_release_date', Thrift.Type.STRING, 4);
    output.writeString(this.resource_release_date);
    output.writeFieldEnd();
  }
  if (this.data_url !== null && this.data_url !== undefined) {
    output.writeFieldBegin('data_url', Thrift.Type.STRING, 5);
    output.writeString(this.data_url);
    output.writeFieldEnd();
  }
  if (this.data_id !== null && this.data_id !== undefined) {
    output.writeFieldBegin('data_id', Thrift.Type.STRING, 6);
    output.writeString(this.data_id);
    output.writeFieldEnd();
  }
  if (this.description !== null && this.description !== undefined) {
    output.writeFieldBegin('description', Thrift.Type.STRING, 7);
    output.writeString(this.description);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

taxon.ObjectProvenanceAction = function(args) {
  this.time = null;
  this.service_name = null;
  this.service_version = null;
  this.service_method = null;
  this.method_parameters = null;
  this.script_name = null;
  this.script_version = null;
  this.script_command_line = null;
  this.input_object_references = null;
  this.validated_object_references = null;
  this.intermediate_input_ids = null;
  this.intermediate_output_ids = null;
  this.external_data = null;
  this.description = null;
  if (args) {
    if (args.time !== undefined) {
      this.time = args.time;
    }
    if (args.service_name !== undefined) {
      this.service_name = args.service_name;
    }
    if (args.service_version !== undefined) {
      this.service_version = args.service_version;
    }
    if (args.service_method !== undefined) {
      this.service_method = args.service_method;
    }
    if (args.method_parameters !== undefined) {
      this.method_parameters = args.method_parameters;
    }
    if (args.script_name !== undefined) {
      this.script_name = args.script_name;
    }
    if (args.script_version !== undefined) {
      this.script_version = args.script_version;
    }
    if (args.script_command_line !== undefined) {
      this.script_command_line = args.script_command_line;
    }
    if (args.input_object_references !== undefined) {
      this.input_object_references = args.input_object_references;
    }
    if (args.validated_object_references !== undefined) {
      this.validated_object_references = args.validated_object_references;
    }
    if (args.intermediate_input_ids !== undefined) {
      this.intermediate_input_ids = args.intermediate_input_ids;
    }
    if (args.intermediate_output_ids !== undefined) {
      this.intermediate_output_ids = args.intermediate_output_ids;
    }
    if (args.external_data !== undefined) {
      this.external_data = args.external_data;
    }
    if (args.description !== undefined) {
      this.description = args.description;
    }
  }
};
taxon.ObjectProvenanceAction.prototype = {};
taxon.ObjectProvenanceAction.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype === Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype === Thrift.Type.STRING) {
        this.time = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype === Thrift.Type.STRING) {
        this.service_name = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype === Thrift.Type.STRING) {
        this.service_version = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype === Thrift.Type.STRING) {
        this.service_method = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype === Thrift.Type.LIST) {
        var _size10 = 0;
        var _rtmp314;
        this.method_parameters = [];
        var _etype13 = 0;
        _rtmp314 = input.readListBegin();
        _etype13 = _rtmp314.etype;
        _size10 = _rtmp314.size;
        for (var _i15 = 0; _i15 < _size10; ++_i15)
        {
          var elem16 = null;
          elem16 = input.readBinary().value;
          this.method_parameters.push(elem16);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype === Thrift.Type.STRING) {
        this.script_name = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype === Thrift.Type.STRING) {
        this.script_version = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype === Thrift.Type.STRING) {
        this.script_command_line = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype === Thrift.Type.LIST) {
        var _size17 = 0;
        var _rtmp321;
        this.input_object_references = [];
        var _etype20 = 0;
        _rtmp321 = input.readListBegin();
        _etype20 = _rtmp321.etype;
        _size17 = _rtmp321.size;
        for (var _i22 = 0; _i22 < _size17; ++_i22)
        {
          var elem23 = null;
          elem23 = input.readString().value;
          this.input_object_references.push(elem23);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype === Thrift.Type.LIST) {
        var _size24 = 0;
        var _rtmp328;
        this.validated_object_references = [];
        var _etype27 = 0;
        _rtmp328 = input.readListBegin();
        _etype27 = _rtmp328.etype;
        _size24 = _rtmp328.size;
        for (var _i29 = 0; _i29 < _size24; ++_i29)
        {
          var elem30 = null;
          elem30 = input.readString().value;
          this.validated_object_references.push(elem30);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype === Thrift.Type.LIST) {
        var _size31 = 0;
        var _rtmp335;
        this.intermediate_input_ids = [];
        var _etype34 = 0;
        _rtmp335 = input.readListBegin();
        _etype34 = _rtmp335.etype;
        _size31 = _rtmp335.size;
        for (var _i36 = 0; _i36 < _size31; ++_i36)
        {
          var elem37 = null;
          elem37 = input.readString().value;
          this.intermediate_input_ids.push(elem37);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype === Thrift.Type.LIST) {
        var _size38 = 0;
        var _rtmp342;
        this.intermediate_output_ids = [];
        var _etype41 = 0;
        _rtmp342 = input.readListBegin();
        _etype41 = _rtmp342.etype;
        _size38 = _rtmp342.size;
        for (var _i43 = 0; _i43 < _size38; ++_i43)
        {
          var elem44 = null;
          elem44 = input.readString().value;
          this.intermediate_output_ids.push(elem44);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 13:
      if (ftype === Thrift.Type.LIST) {
        var _size45 = 0;
        var _rtmp349;
        this.external_data = [];
        var _etype48 = 0;
        _rtmp349 = input.readListBegin();
        _etype48 = _rtmp349.etype;
        _size45 = _rtmp349.size;
        for (var _i50 = 0; _i50 < _size45; ++_i50)
        {
          var elem51 = null;
          elem51 = new taxon.ExternalDataUnit();
          elem51.read(input);
          this.external_data.push(elem51);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 14:
      if (ftype === Thrift.Type.STRING) {
        this.description = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

taxon.ObjectProvenanceAction.prototype.write = function(output) {
  output.writeStructBegin('ObjectProvenanceAction');
  if (this.time !== null && this.time !== undefined) {
    output.writeFieldBegin('time', Thrift.Type.STRING, 1);
    output.writeString(this.time);
    output.writeFieldEnd();
  }
  if (this.service_name !== null && this.service_name !== undefined) {
    output.writeFieldBegin('service_name', Thrift.Type.STRING, 2);
    output.writeString(this.service_name);
    output.writeFieldEnd();
  }
  if (this.service_version !== null && this.service_version !== undefined) {
    output.writeFieldBegin('service_version', Thrift.Type.STRING, 3);
    output.writeString(this.service_version);
    output.writeFieldEnd();
  }
  if (this.service_method !== null && this.service_method !== undefined) {
    output.writeFieldBegin('service_method', Thrift.Type.STRING, 4);
    output.writeString(this.service_method);
    output.writeFieldEnd();
  }
  if (this.method_parameters !== null && this.method_parameters !== undefined) {
    output.writeFieldBegin('method_parameters', Thrift.Type.LIST, 5);
    output.writeListBegin(Thrift.Type.STRING, this.method_parameters.length);
    for (var iter52 in this.method_parameters)
    {
      if (this.method_parameters.hasOwnProperty(iter52))
      {
        iter52 = this.method_parameters[iter52];
        output.writeBinary(iter52);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.script_name !== null && this.script_name !== undefined) {
    output.writeFieldBegin('script_name', Thrift.Type.STRING, 6);
    output.writeString(this.script_name);
    output.writeFieldEnd();
  }
  if (this.script_version !== null && this.script_version !== undefined) {
    output.writeFieldBegin('script_version', Thrift.Type.STRING, 7);
    output.writeString(this.script_version);
    output.writeFieldEnd();
  }
  if (this.script_command_line !== null && this.script_command_line !== undefined) {
    output.writeFieldBegin('script_command_line', Thrift.Type.STRING, 8);
    output.writeString(this.script_command_line);
    output.writeFieldEnd();
  }
  if (this.input_object_references !== null && this.input_object_references !== undefined) {
    output.writeFieldBegin('input_object_references', Thrift.Type.LIST, 9);
    output.writeListBegin(Thrift.Type.STRING, this.input_object_references.length);
    for (var iter53 in this.input_object_references)
    {
      if (this.input_object_references.hasOwnProperty(iter53))
      {
        iter53 = this.input_object_references[iter53];
        output.writeString(iter53);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.validated_object_references !== null && this.validated_object_references !== undefined) {
    output.writeFieldBegin('validated_object_references', Thrift.Type.LIST, 10);
    output.writeListBegin(Thrift.Type.STRING, this.validated_object_references.length);
    for (var iter54 in this.validated_object_references)
    {
      if (this.validated_object_references.hasOwnProperty(iter54))
      {
        iter54 = this.validated_object_references[iter54];
        output.writeString(iter54);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.intermediate_input_ids !== null && this.intermediate_input_ids !== undefined) {
    output.writeFieldBegin('intermediate_input_ids', Thrift.Type.LIST, 11);
    output.writeListBegin(Thrift.Type.STRING, this.intermediate_input_ids.length);
    for (var iter55 in this.intermediate_input_ids)
    {
      if (this.intermediate_input_ids.hasOwnProperty(iter55))
      {
        iter55 = this.intermediate_input_ids[iter55];
        output.writeString(iter55);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.intermediate_output_ids !== null && this.intermediate_output_ids !== undefined) {
    output.writeFieldBegin('intermediate_output_ids', Thrift.Type.LIST, 12);
    output.writeListBegin(Thrift.Type.STRING, this.intermediate_output_ids.length);
    for (var iter56 in this.intermediate_output_ids)
    {
      if (this.intermediate_output_ids.hasOwnProperty(iter56))
      {
        iter56 = this.intermediate_output_ids[iter56];
        output.writeString(iter56);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.external_data !== null && this.external_data !== undefined) {
    output.writeFieldBegin('external_data', Thrift.Type.LIST, 13);
    output.writeListBegin(Thrift.Type.STRUCT, this.external_data.length);
    for (var iter57 in this.external_data)
    {
      if (this.external_data.hasOwnProperty(iter57))
      {
        iter57 = this.external_data[iter57];
        iter57.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.description !== null && this.description !== undefined) {
    output.writeFieldBegin('description', Thrift.Type.STRING, 14);
    output.writeString(this.description);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

taxon.ServiceException = function(args) {
  this.message = null;
  this.stacktrace = null;
  this.inputs = null;
  if (args) {
    if (args.message !== undefined) {
      this.message = args.message;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field message is unset!');
    }
    if (args.stacktrace !== undefined) {
      this.stacktrace = args.stacktrace;
    }
    if (args.inputs !== undefined) {
      this.inputs = args.inputs;
    }
  }
};
Thrift.inherits(taxon.ServiceException, Thrift.TException);
taxon.ServiceException.prototype.name = 'ServiceException';
taxon.ServiceException.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype === Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype === Thrift.Type.STRING) {
        this.message = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype === Thrift.Type.STRING) {
        this.stacktrace = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype === Thrift.Type.MAP) {
        var _size58 = 0;
        var _rtmp362;
        this.inputs = {};
        var _ktype59 = 0;
        var _vtype60 = 0;
        _rtmp362 = input.readMapBegin();
        _ktype59 = _rtmp362.ktype;
        _vtype60 = _rtmp362.vtype;
        _size58 = _rtmp362.size;
        for (var _i63 = 0; _i63 < _size58; ++_i63)
        {
          if (_i63 > 0 ) {
            if (input.rstack.length > input.rpos[input.rpos.length -1] + 1) {
              input.rstack.pop();
            }
          }
          var key64 = null;
          var val65 = null;
          key64 = input.readString().value;
          val65 = input.readString().value;
          this.inputs[key64] = val65;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

taxon.ServiceException.prototype.write = function(output) {
  output.writeStructBegin('ServiceException');
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 1);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  if (this.stacktrace !== null && this.stacktrace !== undefined) {
    output.writeFieldBegin('stacktrace', Thrift.Type.STRING, 2);
    output.writeString(this.stacktrace);
    output.writeFieldEnd();
  }
  if (this.inputs !== null && this.inputs !== undefined) {
    output.writeFieldBegin('inputs', Thrift.Type.MAP, 3);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.inputs));
    for (var kiter66 in this.inputs)
    {
      if (this.inputs.hasOwnProperty(kiter66))
      {
        var viter67 = this.inputs[kiter66];
        output.writeString(kiter66);
        output.writeString(viter67);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

taxon.AuthorizationException = function(args) {
  this.message = null;
  this.stacktrace = null;
  if (args) {
    if (args.message !== undefined) {
      this.message = args.message;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field message is unset!');
    }
    if (args.stacktrace !== undefined) {
      this.stacktrace = args.stacktrace;
    }
  }
};
Thrift.inherits(taxon.AuthorizationException, Thrift.TException);
taxon.AuthorizationException.prototype.name = 'AuthorizationException';
taxon.AuthorizationException.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype === Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype === Thrift.Type.STRING) {
        this.message = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype === Thrift.Type.STRING) {
        this.stacktrace = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

taxon.AuthorizationException.prototype.write = function(output) {
  output.writeStructBegin('AuthorizationException');
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 1);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  if (this.stacktrace !== null && this.stacktrace !== undefined) {
    output.writeFieldBegin('stacktrace', Thrift.Type.STRING, 2);
    output.writeString(this.stacktrace);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

taxon.AuthenticationException = function(args) {
  this.message = null;
  this.stacktrace = null;
  if (args) {
    if (args.message !== undefined) {
      this.message = args.message;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field message is unset!');
    }
    if (args.stacktrace !== undefined) {
      this.stacktrace = args.stacktrace;
    }
  }
};
Thrift.inherits(taxon.AuthenticationException, Thrift.TException);
taxon.AuthenticationException.prototype.name = 'AuthenticationException';
taxon.AuthenticationException.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype === Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype === Thrift.Type.STRING) {
        this.message = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype === Thrift.Type.STRING) {
        this.stacktrace = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

taxon.AuthenticationException.prototype.write = function(output) {
  output.writeStructBegin('AuthenticationException');
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 1);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  if (this.stacktrace !== null && this.stacktrace !== undefined) {
    output.writeFieldBegin('stacktrace', Thrift.Type.STRING, 2);
    output.writeString(this.stacktrace);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

taxon.ObjectReferenceException = function(args) {
  this.message = null;
  this.stacktrace = null;
  if (args) {
    if (args.message !== undefined) {
      this.message = args.message;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field message is unset!');
    }
    if (args.stacktrace !== undefined) {
      this.stacktrace = args.stacktrace;
    }
  }
};
Thrift.inherits(taxon.ObjectReferenceException, Thrift.TException);
taxon.ObjectReferenceException.prototype.name = 'ObjectReferenceException';
taxon.ObjectReferenceException.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype === Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype === Thrift.Type.STRING) {
        this.message = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype === Thrift.Type.STRING) {
        this.stacktrace = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

taxon.ObjectReferenceException.prototype.write = function(output) {
  output.writeStructBegin('ObjectReferenceException');
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 1);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  if (this.stacktrace !== null && this.stacktrace !== undefined) {
    output.writeFieldBegin('stacktrace', Thrift.Type.STRING, 2);
    output.writeString(this.stacktrace);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

taxon.AttributeException = function(args) {
  this.message = null;
  this.stacktrace = null;
  if (args) {
    if (args.message !== undefined) {
      this.message = args.message;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field message is unset!');
    }
    if (args.stacktrace !== undefined) {
      this.stacktrace = args.stacktrace;
    }
  }
};
Thrift.inherits(taxon.AttributeException, Thrift.TException);
taxon.AttributeException.prototype.name = 'AttributeException';
taxon.AttributeException.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype === Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype === Thrift.Type.STRING) {
        this.message = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype === Thrift.Type.STRING) {
        this.stacktrace = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

taxon.AttributeException.prototype.write = function(output) {
  output.writeStructBegin('AttributeException');
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 1);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  if (this.stacktrace !== null && this.stacktrace !== undefined) {
    output.writeFieldBegin('stacktrace', Thrift.Type.STRING, 2);
    output.writeString(this.stacktrace);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

taxon.TypeException = function(args) {
  this.message = null;
  this.stacktrace = null;
  this.valid_types = null;
  if (args) {
    if (args.message !== undefined) {
      this.message = args.message;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field message is unset!');
    }
    if (args.stacktrace !== undefined) {
      this.stacktrace = args.stacktrace;
    }
    if (args.valid_types !== undefined) {
      this.valid_types = args.valid_types;
    }
  }
};
Thrift.inherits(taxon.TypeException, Thrift.TException);
taxon.TypeException.prototype.name = 'TypeException';
taxon.TypeException.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype === Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype === Thrift.Type.STRING) {
        this.message = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype === Thrift.Type.STRING) {
        this.stacktrace = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype === Thrift.Type.LIST) {
        var _size68 = 0;
        var _rtmp372;
        this.valid_types = [];
        var _etype71 = 0;
        _rtmp372 = input.readListBegin();
        _etype71 = _rtmp372.etype;
        _size68 = _rtmp372.size;
        for (var _i73 = 0; _i73 < _size68; ++_i73)
        {
          var elem74 = null;
          elem74 = input.readString().value;
          this.valid_types.push(elem74);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

taxon.TypeException.prototype.write = function(output) {
  output.writeStructBegin('TypeException');
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 1);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  if (this.stacktrace !== null && this.stacktrace !== undefined) {
    output.writeFieldBegin('stacktrace', Thrift.Type.STRING, 2);
    output.writeString(this.stacktrace);
    output.writeFieldEnd();
  }
  if (this.valid_types !== null && this.valid_types !== undefined) {
    output.writeFieldBegin('valid_types', Thrift.Type.LIST, 3);
    output.writeListBegin(Thrift.Type.STRING, this.valid_types.length);
    for (var iter75 in this.valid_types)
    {
      if (this.valid_types.hasOwnProperty(iter75))
      {
        iter75 = this.valid_types[iter75];
        output.writeString(iter75);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

taxon.VERSION = '{{version}}';

return taxon;
});