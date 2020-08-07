import { Host } from './host';
import { RoomOptions } from './roomOptions';
export declare class Room {
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
  creator: Host;
  roomOptions: RoomOptions;
  constructor(
    $roomId: string,
    $name: string,
    $imageUrl: string,
    $body: any,
    $participantCount: number,
    $fileCount: number,
    $activityCount: number,
    $isActive: boolean,
    $canJoin: boolean,
    $hasOnGoingActivity: boolean,
    $createdDate: Date,
    $updatedDate: Date,
    $creator: Host,
    $roomOptions: RoomOptions,
  );
  static fromFirestore(snap: any): Room | null;
  static fromMap(data: any): Room;
  toMap(): {
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
    roomOptions: RoomOptions;
  };
}
