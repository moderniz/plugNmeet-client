// @generated by protoc-gen-es v1.7.0 with parameter "target=ts,import_extension=.ts"
// @generated from file plugnmeet_ingress.proto (package plugnmeet, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type {
  BinaryReadOptions,
  FieldList,
  JsonReadOptions,
  JsonValue,
  PartialMessage,
  PlainMessage,
} from '@bufbuild/protobuf';
import { Message, proto3 } from '@bufbuild/protobuf';

/**
 * @generated from enum plugnmeet.IngressInput
 */
export enum IngressInput {
  /**
   * @generated from enum value: RTMP_INPUT = 0;
   */
  RTMP_INPUT = 0,

  /**
   * @generated from enum value: WHIP_INPUT = 1;
   */
  WHIP_INPUT = 1,
}
// Retrieve enum metadata with: proto3.getEnumType(IngressInput)
proto3.util.setEnumType(IngressInput, 'plugnmeet.IngressInput', [
  { no: 0, name: 'RTMP_INPUT' },
  { no: 1, name: 'WHIP_INPUT' },
]);

/**
 * @generated from message plugnmeet.CreateIngressReq
 */
export class CreateIngressReq extends Message<CreateIngressReq> {
  /**
   * @generated from field: plugnmeet.IngressInput input_type = 1;
   */
  inputType = IngressInput.RTMP_INPUT;

  /**
   * @generated from field: string participant_name = 2;
   */
  participantName = '';

  /**
   * @generated from field: string room_id = 3;
   */
  roomId = '';

  constructor(data?: PartialMessage<CreateIngressReq>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'plugnmeet.CreateIngressReq';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    {
      no: 1,
      name: 'input_type',
      kind: 'enum',
      T: proto3.getEnumType(IngressInput),
    },
    {
      no: 2,
      name: 'participant_name',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
    },
    { no: 3, name: 'room_id', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): CreateIngressReq {
    return new CreateIngressReq().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): CreateIngressReq {
    return new CreateIngressReq().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): CreateIngressReq {
    return new CreateIngressReq().fromJsonString(jsonString, options);
  }

  static equals(
    a: CreateIngressReq | PlainMessage<CreateIngressReq> | undefined,
    b: CreateIngressReq | PlainMessage<CreateIngressReq> | undefined,
  ): boolean {
    return proto3.util.equals(CreateIngressReq, a, b);
  }
}

/**
 * @generated from message plugnmeet.CreateIngressRes
 */
export class CreateIngressRes extends Message<CreateIngressRes> {
  /**
   * @generated from field: bool status = 1;
   */
  status = false;

  /**
   * @generated from field: string msg = 2;
   */
  msg = '';

  /**
   * @generated from field: plugnmeet.IngressInput input_type = 3;
   */
  inputType = IngressInput.RTMP_INPUT;

  /**
   * @generated from field: string url = 4;
   */
  url = '';

  /**
   * @generated from field: string stream_key = 5;
   */
  streamKey = '';

  constructor(data?: PartialMessage<CreateIngressRes>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'plugnmeet.CreateIngressRes';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'status', kind: 'scalar', T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: 'msg', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    {
      no: 3,
      name: 'input_type',
      kind: 'enum',
      T: proto3.getEnumType(IngressInput),
    },
    { no: 4, name: 'url', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 5, name: 'stream_key', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): CreateIngressRes {
    return new CreateIngressRes().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): CreateIngressRes {
    return new CreateIngressRes().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): CreateIngressRes {
    return new CreateIngressRes().fromJsonString(jsonString, options);
  }

  static equals(
    a: CreateIngressRes | PlainMessage<CreateIngressRes> | undefined,
    b: CreateIngressRes | PlainMessage<CreateIngressRes> | undefined,
  ): boolean {
    return proto3.util.equals(CreateIngressRes, a, b);
  }
}
