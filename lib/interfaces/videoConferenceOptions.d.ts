import { ActivityOptions } from './activityOptions';
import { VideoQuality } from './videoQuality';
import { AudioQuality } from './audioQuality';
export interface VideoConferenceOptions extends ActivityOptions {
    maxConferenceRoomsAllowed: boolean;
    hostVideoStreamQuality: VideoQuality;
    hostAudioStreamQuality: AudioQuality;
    participantVideoStreamQuality: VideoQuality;
    participantAudioStreamQuality: AudioQuality;
}
