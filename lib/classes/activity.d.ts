import { Host } from './host';
import { Admin } from './admin';
import { ActivityStatus } from '../enums/activity-status';
import { ActivityType } from '../enums/activity-type';
import { ActivityOptions } from '../interfaces/activityOptions';
import { ActivityInstance } from './activityInstance';
import { SchedulingOptions } from '../interfaces/schedulingOptions';
import { Room } from './room';
export declare class Activity {
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
  );
  static fromFirestore(snap: any): Activity;
  static fromMap(data: any): Activity;
  toMap(): {
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
    creator:
      | {
          firstName: string;
          lastName: string;
          email: string;
          hostId: string;
          roomCount: number;
          avatar: string;
          documentId: string;
        }
      | {
          adminId: string;
          firstName: string;
          lastName: string;
          email: string;
          documentId: string;
          avatar: string;
        };
    activityStatus: ActivityStatus;
    nextActivityInstance: ActivityInstance;
    schedulingOptions: SchedulingOptions;
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
      roomOptions: import('./roomOptions').RoomOptions;
    };
  };
}
