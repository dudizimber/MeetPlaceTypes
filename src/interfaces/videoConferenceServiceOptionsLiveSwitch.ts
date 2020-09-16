import { VideoConferenceService } from "../enums";
import { VideoConferenceOptions } from "./videoConferenceOptions";

export interface VideoConferenceZoomOptionsLiveSwitch extends VideoConferenceOptions {
    videoConferenceService: VideoConferenceService.LIVESWITCH;
    channelId: string;
}