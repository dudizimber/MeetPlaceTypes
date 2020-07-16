import { ActivityOptions } from '../interfaces/activityOptions';
import { ActivityType } from '../enums/activity-type';
import { ActivityInstanceStatus } from '../enums/activity-instance-status';

export class ActivityInstance {
  activityInstanceId: string;
  participantCount: number;
  activityType: ActivityType;
  activityOptions: ActivityOptions;
  activityInstanceStatus: ActivityInstanceStatus;
  fileCount: number;
  startDate: Date;
  endDate: Date;

  constructor(
    $activityInstanceId: string,
    $participantCount: number,
    $activityType: ActivityType,
    $activityOptions: ActivityOptions,
    $activityInstanceStatus: ActivityInstanceStatus,
    $fileCount: number,
    $startDate: Date,
    $endDate: Date,
  ) {
    this.activityInstanceId = $activityInstanceId;
    this.participantCount = $participantCount;
    this.activityType = $activityType;
    this.activityOptions = $activityOptions;
    this.activityInstanceStatus = $activityInstanceStatus;
    this.fileCount = $fileCount;
    this.startDate = $startDate;
    this.endDate = $endDate;
  }

  toMap() {
    return {
      activityInstanceId: this.activityInstanceId ?? null,
      participantCount: this.participantCount ?? 0,
      activityType: this.activityType ?? null,
      activityOptions: this.activityOptions ?? null,
      activityInstanceStatus: this.activityInstanceStatus ?? null,
      fileCount: this.fileCount ?? 0,
      startDate: this.startDate ?? new Date(),
      endDate: this.endDate ?? new Date(),
    };
  }
}
