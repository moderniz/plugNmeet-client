// @generated by protoc-gen-es v1.6.0 with parameter "target=ts,import_extension=.ts"
// @generated from file plugnmeet_speech_services.proto (package plugnmeet, syntax proto3)
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
 * @generated from enum plugnmeet.SpeechServiceUserStatusTasks
 */
export enum SpeechServiceUserStatusTasks {
  /**
   * @generated from enum value: SPEECH_TO_TEXT_SESSION_STARTED = 0;
   */
  SPEECH_TO_TEXT_SESSION_STARTED = 0,

  /**
   * @generated from enum value: SPEECH_TO_TEXT_SESSION_ENDED = 1;
   */
  SPEECH_TO_TEXT_SESSION_ENDED = 1,

  /**
   * @generated from enum value: SPEECH_TO_TEXT_TOTAL_USAGE = 2;
   */
  SPEECH_TO_TEXT_TOTAL_USAGE = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(SpeechServiceUserStatusTasks)
proto3.util.setEnumType(
  SpeechServiceUserStatusTasks,
  'plugnmeet.SpeechServiceUserStatusTasks',
  [
    { no: 0, name: 'SPEECH_TO_TEXT_SESSION_STARTED' },
    { no: 1, name: 'SPEECH_TO_TEXT_SESSION_ENDED' },
    { no: 2, name: 'SPEECH_TO_TEXT_TOTAL_USAGE' },
  ],
);

/**
 * @generated from message plugnmeet.SpeechToTextTranslationReq
 */
export class SpeechToTextTranslationReq extends Message<SpeechToTextTranslationReq> {
  /**
   * @generated from field: string room_id = 1;
   */
  roomId = '';

  /**
   * @generated from field: bool is_enabled = 3;
   */
  isEnabled = false;

  /**
   * @generated from field: repeated string allowed_speech_langs = 4;
   */
  allowedSpeechLangs: string[] = [];

  /**
   * @generated from field: repeated string allowed_speech_users = 5;
   */
  allowedSpeechUsers: string[] = [];

  /**
   * @generated from field: bool is_enabled_translation = 6;
   */
  isEnabledTranslation = false;

  /**
   * @generated from field: repeated string allowed_trans_langs = 7;
   */
  allowedTransLangs: string[] = [];

  /**
   * @generated from field: optional string default_subtitle_lang = 8;
   */
  defaultSubtitleLang?: string;

  constructor(data?: PartialMessage<SpeechToTextTranslationReq>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'plugnmeet.SpeechToTextTranslationReq';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'room_id', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 3, name: 'is_enabled', kind: 'scalar', T: 8 /* ScalarType.BOOL */ },
    {
      no: 4,
      name: 'allowed_speech_langs',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
      repeated: true,
    },
    {
      no: 5,
      name: 'allowed_speech_users',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
      repeated: true,
    },
    {
      no: 6,
      name: 'is_enabled_translation',
      kind: 'scalar',
      T: 8 /* ScalarType.BOOL */,
    },
    {
      no: 7,
      name: 'allowed_trans_langs',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
      repeated: true,
    },
    {
      no: 8,
      name: 'default_subtitle_lang',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
      opt: true,
    },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): SpeechToTextTranslationReq {
    return new SpeechToTextTranslationReq().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): SpeechToTextTranslationReq {
    return new SpeechToTextTranslationReq().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): SpeechToTextTranslationReq {
    return new SpeechToTextTranslationReq().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | SpeechToTextTranslationReq
      | PlainMessage<SpeechToTextTranslationReq>
      | undefined,
    b:
      | SpeechToTextTranslationReq
      | PlainMessage<SpeechToTextTranslationReq>
      | undefined,
  ): boolean {
    return proto3.util.equals(SpeechToTextTranslationReq, a, b);
  }
}

/**
 * @generated from message plugnmeet.GenerateAzureTokenReq
 */
export class GenerateAzureTokenReq extends Message<GenerateAzureTokenReq> {
  /**
   * @generated from field: string room_id = 1;
   */
  roomId = '';

  /**
   * @generated from field: string user_sid = 2;
   */
  userSid = '';

  constructor(data?: PartialMessage<GenerateAzureTokenReq>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'plugnmeet.GenerateAzureTokenReq';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'room_id', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'user_sid', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): GenerateAzureTokenReq {
    return new GenerateAzureTokenReq().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): GenerateAzureTokenReq {
    return new GenerateAzureTokenReq().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): GenerateAzureTokenReq {
    return new GenerateAzureTokenReq().fromJsonString(jsonString, options);
  }

  static equals(
    a: GenerateAzureTokenReq | PlainMessage<GenerateAzureTokenReq> | undefined,
    b: GenerateAzureTokenReq | PlainMessage<GenerateAzureTokenReq> | undefined,
  ): boolean {
    return proto3.util.equals(GenerateAzureTokenReq, a, b);
  }
}

/**
 * @generated from message plugnmeet.GenerateAzureTokenRes
 */
export class GenerateAzureTokenRes extends Message<GenerateAzureTokenRes> {
  /**
   * @generated from field: bool status = 1;
   */
  status = false;

  /**
   * @generated from field: string msg = 2;
   */
  msg = '';

  /**
   * @generated from field: optional string token = 3;
   */
  token?: string;

  /**
   * @generated from field: optional string service_region = 4;
   */
  serviceRegion?: string;

  /**
   * @generated from field: optional string key_id = 5;
   */
  keyId?: string;

  /**
   * @generated from field: bool renew = 6;
   */
  renew = false;

  constructor(data?: PartialMessage<GenerateAzureTokenRes>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'plugnmeet.GenerateAzureTokenRes';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'status', kind: 'scalar', T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: 'msg', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    {
      no: 3,
      name: 'token',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
      opt: true,
    },
    {
      no: 4,
      name: 'service_region',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
      opt: true,
    },
    {
      no: 5,
      name: 'key_id',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
      opt: true,
    },
    { no: 6, name: 'renew', kind: 'scalar', T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): GenerateAzureTokenRes {
    return new GenerateAzureTokenRes().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): GenerateAzureTokenRes {
    return new GenerateAzureTokenRes().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): GenerateAzureTokenRes {
    return new GenerateAzureTokenRes().fromJsonString(jsonString, options);
  }

  static equals(
    a: GenerateAzureTokenRes | PlainMessage<GenerateAzureTokenRes> | undefined,
    b: GenerateAzureTokenRes | PlainMessage<GenerateAzureTokenRes> | undefined,
  ): boolean {
    return proto3.util.equals(GenerateAzureTokenRes, a, b);
  }
}

/**
 * @generated from message plugnmeet.AzureTokenRenewReq
 */
export class AzureTokenRenewReq extends Message<AzureTokenRenewReq> {
  /**
   * @generated from field: string room_id = 1;
   */
  roomId = '';

  /**
   * @generated from field: string user_sid = 2;
   */
  userSid = '';

  /**
   * @generated from field: string service_region = 3;
   */
  serviceRegion = '';

  /**
   * @generated from field: string key_id = 4;
   */
  keyId = '';

  constructor(data?: PartialMessage<AzureTokenRenewReq>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'plugnmeet.AzureTokenRenewReq';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'room_id', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'user_sid', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    {
      no: 3,
      name: 'service_region',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
    },
    { no: 4, name: 'key_id', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): AzureTokenRenewReq {
    return new AzureTokenRenewReq().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): AzureTokenRenewReq {
    return new AzureTokenRenewReq().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): AzureTokenRenewReq {
    return new AzureTokenRenewReq().fromJsonString(jsonString, options);
  }

  static equals(
    a: AzureTokenRenewReq | PlainMessage<AzureTokenRenewReq> | undefined,
    b: AzureTokenRenewReq | PlainMessage<AzureTokenRenewReq> | undefined,
  ): boolean {
    return proto3.util.equals(AzureTokenRenewReq, a, b);
  }
}

/**
 * @generated from message plugnmeet.SpeechServiceUserStatusReq
 */
export class SpeechServiceUserStatusReq extends Message<SpeechServiceUserStatusReq> {
  /**
   * @generated from field: string room_id = 1;
   */
  roomId = '';

  /**
   * @generated from field: string room_sid = 2;
   */
  roomSid = '';

  /**
   * @generated from field: string user_id = 3;
   */
  userId = '';

  /**
   * @generated from field: string key_id = 4;
   */
  keyId = '';

  /**
   * @generated from field: plugnmeet.SpeechServiceUserStatusTasks task = 5;
   */
  task = SpeechServiceUserStatusTasks.SPEECH_TO_TEXT_SESSION_STARTED;

  constructor(data?: PartialMessage<SpeechServiceUserStatusReq>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'plugnmeet.SpeechServiceUserStatusReq';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'room_id', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'room_sid', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 3, name: 'user_id', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 4, name: 'key_id', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    {
      no: 5,
      name: 'task',
      kind: 'enum',
      T: proto3.getEnumType(SpeechServiceUserStatusTasks),
    },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): SpeechServiceUserStatusReq {
    return new SpeechServiceUserStatusReq().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): SpeechServiceUserStatusReq {
    return new SpeechServiceUserStatusReq().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): SpeechServiceUserStatusReq {
    return new SpeechServiceUserStatusReq().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | SpeechServiceUserStatusReq
      | PlainMessage<SpeechServiceUserStatusReq>
      | undefined,
    b:
      | SpeechServiceUserStatusReq
      | PlainMessage<SpeechServiceUserStatusReq>
      | undefined,
  ): boolean {
    return proto3.util.equals(SpeechServiceUserStatusReq, a, b);
  }
}
