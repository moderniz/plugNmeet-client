import { toast } from 'react-toastify';
import { ConnectionQuality } from 'livekit-client';

import ConnectNats from './ConnectNats';
import {
  ICurrentUser,
  ICurrentUserMetadata,
} from '../../store/slices/interfaces/session';
import { NatsKvUserInfo } from '../proto/plugnmeet_nats_msg_pb';
import { store } from '../../store';
import {
  addCurrentUser,
  updateCurrentUserMetadata,
} from '../../store/slices/sessionSlice';
import {
  addParticipant,
  updateParticipant,
} from '../../store/slices/participantSlice';
import languages from '../languages';
import i18n from '../i18n';
import {
  updateIsActiveParticipantsPanel,
  updateIsActiveRaisehand,
} from '../../store/slices/bottomIconsActivitySlice';
import { updatePlayAudioNotification } from '../../store/slices/roomSettingsSlice';

export default class HandleParticipants {
  private _that: ConnectNats;
  private _localParticipant: ICurrentUser;
  private preferredLang = '';
  private isRecorderJoin = false;
  private participantsCount = 0;
  private participantCounterInterval: any = 0;

  constructor(private that: ConnectNats) {
    this._that = that;
    this._localParticipant = {
      userId: '',
      sid: '',
      name: '',
      isRecorder: false,
    };
  }

  get localParticipant(): ICurrentUser {
    return this._localParticipant;
  }

  private decodeMetadata(data: string) {
    try {
      const metadata: ICurrentUserMetadata = JSON.parse(data);
      return metadata;
    } catch (e) {}

    // default
    return {
      is_admin: false,
      is_presenter: false,
      raised_hand: false,
      wait_for_approval: false,
      lock_settings: {
        lock_microphone: true,
        lock_webcam: true,
        lock_screen_sharing: true,
        lock_chat: true,
        lock_chat_send_message: true,
        lock_chat_file_share: true,
        lock_private_chat: true,
        lock_whiteboard: true,
        lock_shared_notepad: true,
      },
    };
  }

  public addLocalParticipantInfo = async (info: NatsKvUserInfo) => {
    this.isRecorderJoin = this.isRecorder(info.userId);
    this._localParticipant = {
      userId: info.userId,
      sid: info.userSid,
      name: info.name,
      isRecorder: this.isRecorderJoin,
    };
    if (this.isRecorderJoin) {
      this.recorderJoined();
    }

    store.dispatch(addCurrentUser(this._localParticipant));
    await this.updateParticipantMetadata(info.userId, info.metadata);
  };

  public addRemoteParticipant = (p: string | NatsKvUserInfo) => {
    let participant: NatsKvUserInfo;
    if (typeof p === 'string') {
      try {
        participant = NatsKvUserInfo.fromJsonString(p);
      } catch (e) {
        console.error(e);
        return;
      }
    } else {
      participant = p;
    }

    const metadata = this.decodeMetadata(participant.metadata);
    this.notificationForWaitingUser(metadata, participant.name);

    store.dispatch(
      addParticipant({
        sid: participant.userSid,
        userId: participant.userId,
        name: participant.name,
        metadata: metadata,
        isLocal: false,
        joinedAt: Number(participant.joinedAt),
        visibility: 'visible',
        audioVolume: store.getState().roomSettings.roomAudioVolume,
        audioTracks: 0,
        videoTracks: 0,
        screenShareTrack: 0,
        isMuted: false,
        connectionQuality: ConnectionQuality.Unknown,
      }),
    );

    if (this.isRecorderJoin) {
      this.participantsCount++;
    }
  };

  public updateParticipantMetadata = async (userId: string, data: string) => {
    const metadata = this.decodeMetadata(data);
    store.dispatch(
      updateParticipant({
        id: userId,
        changes: {
          metadata,
        },
      }),
    );

    if (this._localParticipant.userId === userId) {
      if (
        this.preferredLang === '' &&
        typeof metadata.preferred_lang !== 'undefined' &&
        metadata.preferred_lang !== ''
      ) {
        this.preferredLang = metadata.preferred_lang;
        for (let i = 0; i < languages.length; i++) {
          const lan = languages[i];
          if (
            lan.code.toLowerCase() === metadata.preferred_lang.toLowerCase()
          ) {
            // we'll only change if we've found the right language
            await i18n.changeLanguage(lan.code);
            break;
          }
        }
      }

      store.dispatch(updateCurrentUserMetadata(metadata));
      store.dispatch(updateIsActiveRaisehand(metadata.raised_hand));
    }
  };

  private notificationForWaitingUser(metadata: ICurrentUserMetadata, name) {
    const state = store.getState();
    if (state.session.currentUser?.isRecorder) {
      // if the current user is recorder then don't need to do anything
      return;
    }

    if (
      metadata.wait_for_approval &&
      state.session.currentUser?.metadata?.is_admin
    ) {
      // we can open participants panel if close
      if (!state.bottomIconsActivity.isActiveParticipantsPanel) {
        store.dispatch(updateIsActiveParticipantsPanel(true));
      }
      // also play notification
      store.dispatch(updatePlayAudioNotification(true));

      toast(
        i18n.t('waiting-room.user-waiting', {
          name: name,
        }),
        {
          type: 'info',
          toastId: 'user-waiting',
        },
      );
    }
  }

  public isRecorder = (userId: string) => {
    return userId === 'RECORDER_BOT' || userId === 'RTMP_BOT';
  };

  private recorderJoined() {
    this.startParticipantCounter();
    //store.dispatch(updateIsActiveChatPanel(false));
    store.dispatch(updateIsActiveParticipantsPanel(false));
  }

  public clearParticipantCounterInterval = () => {
    if (this.participantCounterInterval) {
      clearInterval(this.participantCounterInterval);
    }
  };

  /*
   * startParticipantCounter will only call if participant was a recorder or RTMP bot
   * */
  private startParticipantCounter() {
    this.participantCounterInterval = setInterval(async () => {
      if (this.participantsCount === 0) {
        console.log('NO_USER_ONLINE');
        // TODO: update
        //await this.that.room.disconnect();
      }
    }, 3000);
  }
}
