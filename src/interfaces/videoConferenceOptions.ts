import { ActivityOptions } from './activityOptions';
import { VideoQuality } from './videoQuality';
import { AudioQuality } from './audioQuality';
import { VideoConferenceService } from '../enums';
import { VideoConferenceServiceOptions } from './videoConferenceServiceOptions';

export interface VideoConferenceOptions extends ActivityOptions {
  maxConferenceRoomsAllowed: boolean;
  hostVideoStreamQuality: VideoQuality;
  hostAudioStreamQuality: AudioQuality;
  participantVideoStreamQuality: VideoQuality;
  participantAudioStreamQuality: AudioQuality;
  videoConferenceService: VideoConferenceService;
  videoConferenceServiceOptions: VideoConferenceServiceOptions;
}
