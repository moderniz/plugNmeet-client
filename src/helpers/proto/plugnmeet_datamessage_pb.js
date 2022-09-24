// @generated by protoc-gen-es v0.1.1 with parameter "target=js+dts"
// @generated from file plugnmeet_datamessage.proto (package plugnmeet, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {proto3} from "@bufbuild/protobuf";

/**
 * @generated from enum plugnmeet.DataMsgType
 */
export const DataMsgType = proto3.makeEnum(
  "plugnmeet.DataMsgType",
  [
    {no: 0, name: "USER"},
    {no: 1, name: "SYSTEM"},
    {no: 2, name: "WHITEBOARD"},
  ],
);

/**
 * @generated from enum plugnmeet.DataMsgBodyType
 */
export const DataMsgBodyType = proto3.makeEnum(
  "plugnmeet.DataMsgBodyType",
  [
    {no: 0, name: "RAISE_HAND"},
    {no: 1, name: "LOWER_HAND"},
    {no: 2, name: "OTHER_USER_LOWER_HAND"},
    {no: 3, name: "FILE_UPLOAD"},
    {no: 4, name: "INFO"},
    {no: 5, name: "ALERT"},
    {no: 6, name: "SEND_CHAT_MSGS"},
    {no: 7, name: "RENEW_TOKEN"},
    {no: 8, name: "UPDATE_LOCK_SETTINGS"},
    {no: 9, name: "INIT_WHITEBOARD"},
    {no: 10, name: "USER_VISIBILITY_CHANGE"},
    {no: 11, name: "EXTERNAL_MEDIA_PLAYER_EVENTS"},
    {no: 12, name: "POLL_CREATED"},
    {no: 13, name: "NEW_POLL_RESPONSE"},
    {no: 14, name: "POLL_CLOSED"},
    {no: 15, name: "JOIN_BREAKOUT_ROOM"},
    {no: 16, name: "CHAT"},
    {no: 17, name: "SCENE_UPDATE"},
    {no: 18, name: "POINTER_UPDATE"},
    {no: 19, name: "ADD_WHITEBOARD_FILE"},
    {no: 20, name: "ADD_WHITEBOARD_OFFICE_FILE"},
    {no: 21, name: "PAGE_CHANGE"},
    {no: 22, name: "WHITEBOARD_APP_STATE_CHANGE"},
  ],
);

/**
 * @generated from message plugnmeet.DataMessage
 */
export const DataMessage = proto3.makeMessageType(
  "plugnmeet.DataMessage",
  () => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(DataMsgType) },
    { no: 2, name: "message_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "room_sid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "room_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "to", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 6, name: "body", kind: "message", T: DataMsgBody },
  ],
);

/**
 * @generated from message plugnmeet.DataMsgBody
 */
export const DataMsgBody = proto3.makeMessageType(
  "plugnmeet.DataMsgBody",
  () => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(DataMsgBodyType) },
    { no: 2, name: "message_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "time", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "from", kind: "message", T: DataMsgReqFrom },
    { no: 5, name: "msg", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "is_private", kind: "scalar", T: 13 /* ScalarType.UINT32 */, opt: true },
  ],
);

/**
 * @generated from message plugnmeet.DataMsgReqFrom
 */
export const DataMsgReqFrom = proto3.makeMessageType(
  "plugnmeet.DataMsgReqFrom",
  () => [
    { no: 1, name: "sid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

