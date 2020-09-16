import { VideoConferenceService } from "../enums";
import { VideoConferenceOptions } from "./videoConferenceOptions";

export interface VideoConferenceOptionsLiveSwitch extends VideoConferenceOptions {
    videoConferenceService: VideoConferenceService.LIVESWITCH;
    channelId: string;
}