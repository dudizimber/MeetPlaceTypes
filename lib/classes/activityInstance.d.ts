import { ActivityOptions } from '../interfaces/activityOptions';
import { ActivityType } from '../enums/activity-type';
import { ActivityInstanceStatus } from '../enums/activity-instance-status';
import { Activity } from './activity';
export declare class ActivityInstance {
    activityInstanceId: string;
    activity: Activity;
    participantCount: number;
    activityType: ActivityType;
    activityOptions: ActivityOptions;
    activityInstanceStatus: ActivityInstanceStatus;
    fileCount: number;
    startDate: Date;
    endDate: Date;
    isNext: boolean;
    constructor($activityInstanceId: string, $activity: Activity, $participantCount: number, $activityType: ActivityType, $activityOptions: ActivityOptions, $activityInstanceStatus: ActivityInstanceStatus, $fileCount: number, $startDate: Date, $endDate: Date);
    toMap(): {
        activityInstanceId: string;
        activity: {
            activityId: string;
            name: string;
            imageUrl: string;
            body: string;
            participantCount: number;
            fileCount: number;
            activityCategory: string;
            isActive: boolean;
            activityType: ActivityType;
            activityOptions: ActivityOptions;
            createdDate: Date;
            updatedDate: Date;
            creator: {
                firstName: string;
                lastName: string;
                email: string;
                hostId: string;
                roomCount: number;
                avatar: string;
                documentId: string;
            } | {
                adminId: string;
                firstName: string;
                lastName: string;
                email: string;
                documentId: string;
            };
            activityStatus: import("..").ActivityStatus;
            nextActivityInstance: ActivityInstance;
            schedulingOptions: import("..").SchedulingOptions;
            room: {
                roomId: string;
                name: string;
                imageUrl: string;
                body: any;
                participantCount: number;
                fileCount: number;
                activityCount: number;
                isActive: boolean;
                canJoin: boolean;
                hasOnGoingActivity: boolean;
                createdDate: Date;
                updatedDate: Date;
                creator: {
                    firstName: string;
                    lastName: string;
                    email: string;
                    hostId: string;
                    roomCount: number;
                    avatar: string;
                    documentId: string;
                };
                roomOptions: import("./roomOptions").RoomOptions;
            };
        };
        participantCount: number;
        activityType: ActivityType;
        activityOptions: ActivityOptions;
        activityInstanceStatus: ActivityInstanceStatus;
        fileCount: number;
        startDate: Date;
        endDate: Date;
        isNext: boolean;
    };
}
