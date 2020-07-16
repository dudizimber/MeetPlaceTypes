import { Host } from './host';
import { Admin } from './admin';
import { ActivityStatus } from '../enums/activity-status';
import { ActivityType } from '../enums/activity-type';
import { ActivityOptions } from '../interfaces/activityOptions';
import { ActivityInstance } from './activityInstance';
import { SchedulingOptions } from '../interfaces/schedulingOptions';
import { Room } from './room';
import { DocumentSnapshot, Timestamp } from '@google-cloud/firestore';

export class Activity {
  activityId: string;
  name: string;
  imageUrl: string;
  body: string;
  activityCategory: string;
  participantCount: number;
  fileCount: number;
  activityType: ActivityType;
  activityOptions: ActivityOptions;
  activityStatus: ActivityStatus;
  isActive: boolean;
  createdDate: Date;
  updatedDate: Date;
  creator: Host | Admin;
  nextActivityInstance: ActivityInstance;
  schedulingOptions: SchedulingOptions;
  room: Room;

  constructor(
    $activityId: string,
    $name: string,
    $imageUrl: string,
    $body: string,
    $participantCount: number,
    $fileCount: number,
    $activityCategory: string,
    $isActive: boolean,
    $activityType: ActivityType,
    $activityOptions: ActivityOptions,
    $createdDate: Date,
    $updatedDate: Date,
    $creator: Host,
    $activityStatus: ActivityStatus,
    $nextActivityInstance: ActivityInstance,
    $schedulingOptions: SchedulingOptions,
    $room: Room,
  ) {
    this.activityId = $activityId;
    this.name = $name;
    this.imageUrl = $imageUrl;
    this.body = $body;
    this.participantCount = $participantCount;
    this.fileCount = $fileCount;
    this.activityCategory = $activityCategory;
    this.isActive = $isActive;
    this.activityType = $activityType;
    this.activityOptions = $activityOptions;
    this.createdDate = $createdDate;
    this.updatedDate = $updatedDate;
    this.creator = $creator;
    this.activityStatus = $activityStatus;
    this.nextActivityInstance = $nextActivityInstance;
    this.schedulingOptions = $schedulingOptions;
    this.room = $room;
  }

  static fromFirestore(snap: DocumentSnapshot) {
    if (snap === null || !snap.exists) return null;
    const data = snap.data() || {};

    data.schedulingOptions.startDate =
      data.schedulingOptions.startDate instanceof Timestamp
        ? data.schedulingOptions.startDate.toDate()
        : data.schedulingOptions.startDate;
    data.schedulingOptions.endDate =
      data.schedulingOptions.endDate instanceof Timestamp
        ? data.schedulingOptions.endDate.toDate()
        : data.schedulingOptions.endDate;

    return Activity.fromMap({ ...data, activityId: snap.id });
  }

  static fromMap(data: any) {
    return new Activity(
      data.activityId,
      data.name,
      data.imageUrl,
      data.body,
      data.participantCount,
      data.fileCount,
      data.activityCategory,
      data.isActive,
      data.activityType,
      data.activityOptions,
      data.createdDate,
      data.updatedDate,
      Host.fromMap(data.creator ?? {}),
      data.activityStatus,
      data.nextActivityInstance,
      data.schedulingOptions,
      Room.fromMap(data.room ?? {}),
    );
  }

  toMap() {
    return {
      activityId: this.activityId ?? null,
      name: this.name ?? null,
      imageUrl: this.imageUrl ?? null,
      body: this.body ?? null,
      participantCount: this.participantCount ?? 0,
      fileCount: this.fileCount ?? 0,
      activityCategory: this.activityCategory ?? null,
      isActive: this.isActive ?? true,
      activityType: this.activityType ?? null,
      activityOptions: this.activityOptions ?? null,
      createdDate: this.createdDate ?? new Date(),
      updatedDate: this.updatedDate ?? new Date(),
      creator: this.creator.toMap() ?? null,
      activityStatus: this.activityStatus ?? null,
      nextActivityInstance: this.nextActivityInstance ?? null,
      schedulingOptions: this.schedulingOptions ?? null,
      room: this.room.toMap() ?? null,
    };
  }
}
