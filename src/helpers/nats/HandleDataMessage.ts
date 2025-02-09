import { toast } from 'react-toastify';
import { DataChannelMessage, DataMsgBodyType } from 'plugnmeet-protocol-js';

import ConnectNats from './ConnectNats';
import { store } from '../../store';
import { updateRequestedWhiteboardData } from '../../store/slices/whiteboard';
import { pollsApi } from '../../store/services/pollsApi';
import { SpeechTextBroadcastFormat } from '../../store/slices/interfaces/speechServices';
import { addSpeechSubtitleText } from '../../store/slices/speechServicesSlice';
import { updateParticipant } from '../../store/slices/participantSlice';
import {
  addExternalMediaPlayerAction,
  externalMediaPlayerSeekTo,
} from '../../store/slices/externalMediaPlayer';

export default class HandleDataMessage {
  private _that: ConnectNats;

  constructor(that: ConnectNats) {
    this._that = that;
  }

  public handleMessage = async (payload: DataChannelMessage) => {
    switch (payload.type) {
      case DataMsgBodyType.REQ_INIT_WHITEBOARD_DATA:
        if (payload.fromUserId === this._that.userId) {
          return;
        }
        this.handleSendInitWhiteboard(payload);
        break;
      case DataMsgBodyType.USER_VISIBILITY_CHANGE:
        if (payload.fromUserId === this._that.userId) {
          return;
        }
        this.handleUserVisibility(payload);
        break;
      case DataMsgBodyType.INFO:
        if (payload.fromUserId === this._that.userId || this._that.isRecorder) {
          return;
        }
        toast(payload.message, {
          toastId: 'info-status',
          type: 'info',
        });
        break;
      case DataMsgBodyType.ALERT:
        if (payload.fromUserId === this._that.userId || this._that.isRecorder) {
          return;
        }
        toast(payload.message, {
          toastId: 'alert-status',
          type: 'warning',
        });
        break;
      case DataMsgBodyType.EXTERNAL_MEDIA_PLAYER_EVENTS:
        if (payload.fromUserId === this._that.userId) {
          return;
        }
        this.handleExternalMediaPlayerEvents(payload.message);
        break;
      case DataMsgBodyType.NEW_POLL_RESPONSE:
        if (payload.fromUserId === this._that.userId) {
          return;
        }
        store.dispatch(pollsApi.util.invalidateTags(['List', 'PollsStats']));
        break;
      case DataMsgBodyType.SPEECH_SUBTITLE_TEXT:
        this.handleSpeechSubtitleText(payload.message);
        break;
    }
  };

  private handleSendInitWhiteboard(payload: DataChannelMessage) {
    if (store.getState().whiteboard.requestedWhiteboardData.requested) {
      // already have one request
      return;
    }
    // we'll update the reducer-only
    // component will take care for sending data
    store.dispatch(
      updateRequestedWhiteboardData({
        requested: true,
        sendTo: payload.fromUserId,
      }),
    );
  }

  private handleUserVisibility(payload: DataChannelMessage) {
    if (!this._that.isAdmin) {
      return;
    }
    store.dispatch(
      updateParticipant({
        id: payload.fromUserId,
        changes: {
          visibility: payload.message,
        },
      }),
    );
  }

  private handleExternalMediaPlayerEvents(msg: string) {
    if (msg === '') {
      return;
    }
    const data = JSON.parse(msg);
    store.dispatch(addExternalMediaPlayerAction(data.action));
    if (typeof data.seekTo !== 'undefined') {
      store.dispatch(externalMediaPlayerSeekTo(data.seekTo));
    }
  }

  private handleSpeechSubtitleText(message: string) {
    if (message === '') {
      return;
    }
    const data: SpeechTextBroadcastFormat = JSON.parse(message);
    const lang = store.getState().speechServices.selectedSubtitleLang;

    if (lang !== '' && typeof data.result[lang] !== 'undefined') {
      const d = new Date();
      store.dispatch(
        addSpeechSubtitleText({
          type: data.type,
          result: {
            text: data.result[lang],
            from: data.from,
            time: d.toLocaleTimeString(),
            id: d.getUTCMilliseconds().toString(),
          },
        }),
      );
    }
  }
}
