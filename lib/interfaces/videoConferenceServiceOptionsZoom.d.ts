import { VideoConferenceService } from '../enums';
import { VideoConferenceOptions } from './videoConferenceOptions';
export interface VideoConferenceOptionsZoom extends VideoConferenceOptions {
  videoConferenceService: VideoConferenceService.ZOOM;
  meetingId: string;
  meetingPassword: string;
  zoomApiKey: string;
}
