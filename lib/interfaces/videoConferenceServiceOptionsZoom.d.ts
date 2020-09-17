import { VideoConferenceServiceOptions } from './videoConferenceServiceOptions';
export interface VideoConferenceOptionsZoom extends VideoConferenceServiceOptions {
  meetingId: string;
  meetingPassword: string;
  credentialId: string;
}
