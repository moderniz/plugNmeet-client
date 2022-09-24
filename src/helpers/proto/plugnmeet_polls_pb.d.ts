// @generated by protoc-gen-es v0.1.1 with parameter "target=js+dts"
// @generated from file plugnmeet_polls.proto (package plugnmeet, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

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
 * @generated from message plugnmeet.CreatePollReq
 */
export declare class CreatePollReq extends Message<CreatePollReq> {
  /**
   * @generated from field: string room_id = 1;
   */
  roomId: string;

  /**
   * @generated from field: string user_id = 2;
   */
  userId: string;

  /**
   * @generated from field: string poll_id = 3;
   */
  pollId: string;

  /**
   * @generated from field: string question = 4;
   */
  question: string;

  /**
   * @generated from field: repeated plugnmeet.CreatePollOptions options = 5;
   */
  options: CreatePollOptions[];

  constructor(data?: PartialMessage<CreatePollReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = 'plugnmeet.CreatePollReq';
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): CreatePollReq;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): CreatePollReq;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): CreatePollReq;

  static equals(
    a: CreatePollReq | PlainMessage<CreatePollReq> | undefined,
    b: CreatePollReq | PlainMessage<CreatePollReq> | undefined,
  ): boolean;
}

/**
 * @generated from message plugnmeet.CreatePollOptions
 */
export declare class CreatePollOptions extends Message<CreatePollOptions> {
  /**
   * @generated from field: uint32 id = 1;
   */
  id: number;

  /**
   * @generated from field: string text = 2;
   */
  text: string;

  constructor(data?: PartialMessage<CreatePollOptions>);

  static readonly runtime: typeof proto3;
  static readonly typeName = 'plugnmeet.CreatePollOptions';
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): CreatePollOptions;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): CreatePollOptions;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): CreatePollOptions;

  static equals(
    a: CreatePollOptions | PlainMessage<CreatePollOptions> | undefined,
    b: CreatePollOptions | PlainMessage<CreatePollOptions> | undefined,
  ): boolean;
}

/**
 * @generated from message plugnmeet.PollInfo
 */
export declare class PollInfo extends Message<PollInfo> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string room_id = 2;
   */
  roomId: string;

  /**
   * @generated from field: string question = 3;
   */
  question: string;

  /**
   * @generated from field: repeated plugnmeet.CreatePollOptions options = 4;
   */
  options: CreatePollOptions[];

  /**
   * @generated from field: bool is_running = 5;
   */
  isRunning: boolean;

  /**
   * @generated from field: int64 created = 6;
   */
  created: bigint;

  /**
   * @generated from field: string created_by = 7;
   */
  createdBy: string;

  /**
   * @generated from field: string closed_by = 8;
   */
  closedBy: string;

  constructor(data?: PartialMessage<PollInfo>);

  static readonly runtime: typeof proto3;
  static readonly typeName = 'plugnmeet.PollInfo';
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): PollInfo;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): PollInfo;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): PollInfo;

  static equals(
    a: PollInfo | PlainMessage<PollInfo> | undefined,
    b: PollInfo | PlainMessage<PollInfo> | undefined,
  ): boolean;
}

/**
 * @generated from message plugnmeet.SubmitPollResponseReq
 */
export declare class SubmitPollResponseReq extends Message<SubmitPollResponseReq> {
  /**
   * @generated from field: string room_id = 1;
   */
  roomId: string;

  /**
   * @generated from field: string user_id = 2;
   */
  userId: string;

  /**
   * @generated from field: string name = 3;
   */
  name: string;

  /**
   * @generated from field: string poll_id = 4;
   */
  pollId: string;

  /**
   * @generated from field: uint64 selected_option = 5;
   */
  selectedOption: bigint;

  constructor(data?: PartialMessage<SubmitPollResponseReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = 'plugnmeet.SubmitPollResponseReq';
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): SubmitPollResponseReq;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): SubmitPollResponseReq;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): SubmitPollResponseReq;

  static equals(
    a: SubmitPollResponseReq | PlainMessage<SubmitPollResponseReq> | undefined,
    b: SubmitPollResponseReq | PlainMessage<SubmitPollResponseReq> | undefined,
  ): boolean;
}

/**
 * @generated from message plugnmeet.ClosePollReq
 */
export declare class ClosePollReq extends Message<ClosePollReq> {
  /**
   * @generated from field: string room_id = 1;
   */
  roomId: string;

  /**
   * @generated from field: string user_id = 2;
   */
  userId: string;

  /**
   * @generated from field: string poll_id = 3;
   */
  pollId: string;

  constructor(data?: PartialMessage<ClosePollReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = 'plugnmeet.ClosePollReq';
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): ClosePollReq;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): ClosePollReq;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): ClosePollReq;

  static equals(
    a: ClosePollReq | PlainMessage<ClosePollReq> | undefined,
    b: ClosePollReq | PlainMessage<ClosePollReq> | undefined,
  ): boolean;
}

/**
 * @generated from message plugnmeet.PollResponsesResultOptions
 */
export declare class PollResponsesResultOptions extends Message<PollResponsesResultOptions> {
  /**
   * @generated from field: uint64 id = 1;
   */
  id: bigint;

  /**
   * @generated from field: string text = 2;
   */
  text: string;

  /**
   * @generated from field: uint64 vote_count = 3;
   */
  voteCount: bigint;

  constructor(data?: PartialMessage<PollResponsesResultOptions>);

  static readonly runtime: typeof proto3;
  static readonly typeName = 'plugnmeet.PollResponsesResultOptions';
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): PollResponsesResultOptions;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): PollResponsesResultOptions;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): PollResponsesResultOptions;

  static equals(
    a:
      | PollResponsesResultOptions
      | PlainMessage<PollResponsesResultOptions>
      | undefined,
    b:
      | PollResponsesResultOptions
      | PlainMessage<PollResponsesResultOptions>
      | undefined,
  ): boolean;
}

/**
 * @generated from message plugnmeet.PollResponsesResult
 */
export declare class PollResponsesResult extends Message<PollResponsesResult> {
  /**
   * @generated from field: string question = 1;
   */
  question: string;

  /**
   * @generated from field: uint64 total_responses = 2;
   */
  totalResponses: bigint;

  /**
   * @generated from field: repeated plugnmeet.PollResponsesResultOptions options = 3;
   */
  options: PollResponsesResultOptions[];

  constructor(data?: PartialMessage<PollResponsesResult>);

  static readonly runtime: typeof proto3;
  static readonly typeName = 'plugnmeet.PollResponsesResult';
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): PollResponsesResult;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): PollResponsesResult;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): PollResponsesResult;

  static equals(
    a: PollResponsesResult | PlainMessage<PollResponsesResult> | undefined,
    b: PollResponsesResult | PlainMessage<PollResponsesResult> | undefined,
  ): boolean;
}

/**
 * @generated from message plugnmeet.PollsStats
 */
export declare class PollsStats extends Message<PollsStats> {
  /**
   * @generated from field: uint64 total_polls = 1;
   */
  totalPolls: bigint;

  /**
   * @generated from field: uint64 total_running = 2;
   */
  totalRunning: bigint;

  constructor(data?: PartialMessage<PollsStats>);

  static readonly runtime: typeof proto3;
  static readonly typeName = 'plugnmeet.PollsStats';
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): PollsStats;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): PollsStats;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): PollsStats;

  static equals(
    a: PollsStats | PlainMessage<PollsStats> | undefined,
    b: PollsStats | PlainMessage<PollsStats> | undefined,
  ): boolean;
}

/**
 * @generated from message plugnmeet.PollResponse
 */
export declare class PollResponse extends Message<PollResponse> {
  /**
   * @generated from field: bool status = 1;
   */
  status: boolean;

  /**
   * @generated from field: string msg = 2;
   */
  msg: string;

  /**
   * @generated from field: optional string poll_id = 3;
   */
  pollId?: string;

  /**
   * @generated from field: optional uint64 total_responses = 4;
   */
  totalResponses?: bigint;

  /**
   * @generated from field: optional uint64 voted = 5;
   */
  voted?: bigint;

  /**
   * @generated from field: map<string, string> responses = 6;
   */
  responses: { [key: string]: string };

  /**
   * @generated from field: repeated plugnmeet.PollInfo polls = 7;
   */
  polls: PollInfo[];

  /**
   * @generated from field: optional plugnmeet.PollsStats stats = 8;
   */
  stats?: PollsStats;

  /**
   * @generated from field: optional uint64 total_polls = 9;
   */
  totalPolls?: bigint;

  /**
   * @generated from field: optional uint64 total_running = 10;
   */
  totalRunning?: bigint;

  /**
   * @generated from field: optional plugnmeet.PollResponsesResult poll_responses_result = 11;
   */
  pollResponsesResult?: PollResponsesResult;

  constructor(data?: PartialMessage<PollResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = 'plugnmeet.PollResponse';
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): PollResponse;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): PollResponse;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): PollResponse;

  static equals(
    a: PollResponse | PlainMessage<PollResponse> | undefined,
    b: PollResponse | PlainMessage<PollResponse> | undefined,
  ): boolean;
}
