import { ActivityOptions } from '../interfaces/activityOptions';
import { ActivityType } from '../enums/activity-type';
import { ActivityInstanceStatus } from '../enums/activity-instance-status';
import { Activity } from './activity';

export class ActivityInstance {
  activityInstanceId: string;
  activity: Activity;
  participantCount: number;
  activityType: ActivityType;
  activityOptions: ActivityOptions;
  activityInstanceStatus: ActivityInstanceStatus;
  fileCount: number;
  startDate: Date;
  endDate: Date;
  isNext: boolean = false;

  constructor(
    $activityInstanceId: string,
    $activity: Activity,
    $participantCount: number,
    $activityType: ActivityType,
    $activityOptions: ActivityOptions,
    $activityInstanceStatus: ActivityInstanceStatus,
    $fileCount: number,
    $startDate: Date,
    $endDate: Date,
  ) {
    this.activityInstanceId = $activityInstanceId;
    this.activity = $activity instanceof Activity ? $activity : Activity.fromMap($activity);
    this.participantCount = $participantCount;
    this.activityType = $activityType;
    this.activityOptions = $activityOptions;
    this.activityInstanceStatus = $activityInstanceStatus;
    this.fileCount = $fileCount;
    this.startDate = $startDate;
    this.endDate = $endDate;
  }

  static fromFirestore(snapshot: any) {
    return ActivityInstance.fromMap({ ...snapshot.data(), activityInstanceId: snapshot.id });
  }

  static fromMap(data: any) {
    let startDate;
    let endDate;
    try {
      startDate = data.startDate.toDate();
      endDate = data.endDate.toDate();
    } catch (error) {
      startDate = data.startDate;
      endDate = data.endDate; 
    }
    return new ActivityInstance(
      data.activityInstanceId,
      data.activity,
      data.participantCount,
      data.activityType,
      data.activityOptions,
      data.activityInstanceStatus,
      data.fileCount,
      startDate,
      endDate,
    );
  }

  toMap() {
    return {
      activityInstanceId: this.activityInstanceId ?? null,
      activity: this.activity.toMap() ?? null,
      participantCount: this.participantCount ?? 0,
      activityType: this.activityType ?? null,
      activityOptions: this.activityOptions ?? null,
      activityInstanceStatus: this.activityInstanceStatus ?? null,
      fileCount: this.fileCount ?? 0,
      startDate: this.startDate ?? new Date(),
      endDate: this.endDate ?? new Date(),
      isNext: this.isNext ?? false,
    };
  }
}
