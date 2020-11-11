import { ActivityInstance } from './activityInstance';
import { Admin } from './admin';
import { Host } from './host';
import { Participant } from './participant';
export declare class MeetingParticipant {
  meetingParticipantId: string;
  firstName: string;
  lastName: string;
  email: string;
  externalId: string;
  activityInstance: ActivityInstance;
  joinDate: Date;
  constructor(
    meetingParticipantId: string,
    firstName: string,
    lastName: string,
    email: string,
    externalId: string,
    activityInstance: ActivityInstance,
    joinDate: Date,
  );
  get fullName(): string;
  static fromFirestore(snap: any): MeetingParticipant;
  static fromParticipant(participant: Participant, externalId: string, instance: ActivityInstance): MeetingParticipant;
  static fromHost(host: Host, externalId: string, instance: ActivityInstance): MeetingParticipant;
  static fromAdmin(admin: Admin, externalId: string, instance: ActivityInstance): MeetingParticipant;
  static fromMap(data: any): MeetingParticipant;
  toMap(): {
    meetingParticipantId: string;
    firstName: string;
    lastName: string;
    email: string;
    externalId: string;
    activityInstance: {
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
        activityType: import('..').ActivityType;
        activityOptions: import('..').ActivityOptions;
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
        activityStatus: import('..').ActivityStatus;
        nextActivityInstance: ActivityInstance;
        schedulingOptions: import('..').SchedulingOptions;
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
      participantCount: number;
      activityType: import('..').ActivityType;
      activityOptions: import('..').ActivityOptions;
      activityInstanceStatus: import('..').ActivityInstanceStatus;
      fileCount: number;
      startDate: Date;
      endDate: Date;
      isNext: boolean;
    };
    joinDate: Date;
  };
}
