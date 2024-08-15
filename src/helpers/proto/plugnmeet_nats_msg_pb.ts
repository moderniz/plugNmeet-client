// @generated by protoc-gen-es v1.10.0 with parameter "target=ts,import_extension=.ts"
// @generated from file plugnmeet_nats_msg.proto (package plugnmeet, syntax proto3)
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
 * @generated from enum plugnmeet.NatsMsgServerToClientEvents
 */
export enum NatsMsgServerToClientEvents {
  /**
   * @generated from enum value: UNKNOWN_NATS_SERVER_EVENT = 0;
   */
  UNKNOWN_NATS_SERVER_EVENT = 0,

  /**
   * both initial & update
   *
   * @generated from enum value: ROOM_METADATA = 1;
   */
  ROOM_METADATA = 1,

  /**
   * @generated from enum value: LOCAL_USER_INFO = 2;
   */
  LOCAL_USER_INFO = 2,

  /**
   * @generated from enum value: JOINED_USERS_LIST = 3;
   */
  JOINED_USERS_LIST = 3,

  /**
   * mostly after update
   *
   * @generated from enum value: USER_METADATA = 4;
   */
  USER_METADATA = 4,

  /**
   * @generated from enum value: USER_JOINED = 5;
   */
  USER_JOINED = 5,

  /**
   * @generated from enum value: USER_DISCONNECTED = 6;
   */
  USER_DISCONNECTED = 6,
}
// Retrieve enum metadata with: proto3.getEnumType(NatsMsgServerToClientEvents)
proto3.util.setEnumType(
  NatsMsgServerToClientEvents,
  'plugnmeet.NatsMsgServerToClientEvents',
  [
    { no: 0, name: 'UNKNOWN_NATS_SERVER_EVENT' },
    { no: 1, name: 'ROOM_METADATA' },
    { no: 2, name: 'LOCAL_USER_INFO' },
    { no: 3, name: 'JOINED_USERS_LIST' },
    { no: 4, name: 'USER_METADATA' },
    { no: 5, name: 'USER_JOINED' },
    { no: 6, name: 'USER_DISCONNECTED' },
  ],
);

/**
 * @generated from enum plugnmeet.NatsMsgClientToServerEvents
 */
export enum NatsMsgClientToServerEvents {
  /**
   * @generated from enum value: UNKNOWN_NATS_CLIENT_EVENT = 0;
   */
  UNKNOWN_NATS_CLIENT_EVENT = 0,

  /**
   * @generated from enum value: RENEW_PNM_TOKEN = 1;
   */
  RENEW_PNM_TOKEN = 1,
}
// Retrieve enum metadata with: proto3.getEnumType(NatsMsgClientToServerEvents)
proto3.util.setEnumType(
  NatsMsgClientToServerEvents,
  'plugnmeet.NatsMsgClientToServerEvents',
  [
    { no: 0, name: 'UNKNOWN_NATS_CLIENT_EVENT' },
    { no: 1, name: 'RENEW_PNM_TOKEN' },
  ],
);

/**
 * @generated from message plugnmeet.NatsMsgServerToClient
 */
export class NatsMsgServerToClient extends Message<NatsMsgServerToClient> {
  /**
   * @generated from field: string id = 1;
   */
  id = '';

  /**
   * @generated from field: plugnmeet.NatsMsgServerToClientEvents event = 2;
   */
  event = NatsMsgServerToClientEvents.UNKNOWN_NATS_SERVER_EVENT;

  /**
   * @generated from field: string msg = 3;
   */
  msg = '';

  constructor(data?: PartialMessage<NatsMsgServerToClient>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'plugnmeet.NatsMsgServerToClient';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'id', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    {
      no: 2,
      name: 'event',
      kind: 'enum',
      T: proto3.getEnumType(NatsMsgServerToClientEvents),
    },
    { no: 3, name: 'msg', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): NatsMsgServerToClient {
    return new NatsMsgServerToClient().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): NatsMsgServerToClient {
    return new NatsMsgServerToClient().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): NatsMsgServerToClient {
    return new NatsMsgServerToClient().fromJsonString(jsonString, options);
  }

  static equals(
    a: NatsMsgServerToClient | PlainMessage<NatsMsgServerToClient> | undefined,
    b: NatsMsgServerToClient | PlainMessage<NatsMsgServerToClient> | undefined,
  ): boolean {
    return proto3.util.equals(NatsMsgServerToClient, a, b);
  }
}

/**
 * @generated from message plugnmeet.NatsMsgClientToServer
 */
export class NatsMsgClientToServer extends Message<NatsMsgClientToServer> {
  /**
   * @generated from field: string id = 1;
   */
  id = '';

  /**
   * @generated from field: plugnmeet.NatsMsgClientToServerEvents event = 2;
   */
  event = NatsMsgClientToServerEvents.UNKNOWN_NATS_CLIENT_EVENT;

  /**
   * @generated from field: string msg = 3;
   */
  msg = '';

  constructor(data?: PartialMessage<NatsMsgClientToServer>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'plugnmeet.NatsMsgClientToServer';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'id', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    {
      no: 2,
      name: 'event',
      kind: 'enum',
      T: proto3.getEnumType(NatsMsgClientToServerEvents),
    },
    { no: 3, name: 'msg', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): NatsMsgClientToServer {
    return new NatsMsgClientToServer().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): NatsMsgClientToServer {
    return new NatsMsgClientToServer().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): NatsMsgClientToServer {
    return new NatsMsgClientToServer().fromJsonString(jsonString, options);
  }

  static equals(
    a: NatsMsgClientToServer | PlainMessage<NatsMsgClientToServer> | undefined,
    b: NatsMsgClientToServer | PlainMessage<NatsMsgClientToServer> | undefined,
  ): boolean {
    return proto3.util.equals(NatsMsgClientToServer, a, b);
  }
}
