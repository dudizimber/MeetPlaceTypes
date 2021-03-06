import { VideoConferenceService } from "../enums";
import { VideoConferenceServiceOptions } from "./videoConferenceServiceOptions";

export interface VideoConferenceOptionsLiveSwitch extends VideoConferenceServiceOptions {
    channelId: string;
}