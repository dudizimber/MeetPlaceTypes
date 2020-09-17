import { VideoConferenceService } from "../enums";
import { VideoConferenceServiceOptions } from "./videoConferenceServiceOptions";

export interface VideoConferenceOptionsZoom extends VideoConferenceServiceOptions {
    meetingId: string;
    meetingPassword: string;
    zoomApiKey: string;
    credentialId: string;
}