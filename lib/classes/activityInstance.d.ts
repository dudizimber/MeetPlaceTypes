import { ActivityOptions } from '../interfaces/activityOptions';
import { ActivityType } from '../enums/activity-type';
import { ActivityInstanceStatus } from '../enums/activity-instance-status';
export declare class ActivityInstance {
    activityInstanceId: string;
    participantCount: number;
    activityType: ActivityType;
    activityOptions: ActivityOptions;
    activityInstanceStatus: ActivityInstanceStatus;
    fileCount: number;
    startDate: Date;
    endDate: Date;
    constructor($activityInstanceId: string, $participantCount: number, $activityType: ActivityType, $activityOptions: ActivityOptions, $activityInstanceStatus: ActivityInstanceStatus, $fileCount: number, $startDate: Date, $endDate: Date);
    toMap(): {
        activityInstanceId: string;
        participantCount: number;
        activityType: ActivityType;
        activityOptions: ActivityOptions;
        activityInstanceStatus: ActivityInstanceStatus;
        fileCount: number;
        startDate: Date;
        endDate: Date;
    };
}
