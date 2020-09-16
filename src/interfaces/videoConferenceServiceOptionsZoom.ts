import { VideoConferenceService } from "../enums";
import { VideoConferenceServiceOptions } from "./videoConferenceServiceOptions";

export interface VideoConferenceOptionsZoom extends VideoConferenceServiceOptions {
    videoConferenceService: VideoConferenceService.ZOOM;
    meetingId: string;
    meetingPassword: string;
    zoomApiKey: string;
}