import { Host } from './host';
import { RoomOptions } from './roomOptions';

export class Room {
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
  ) {
    this.roomId = $roomId;
    this.name = $name;
    this.imageUrl = $imageUrl;
    this.body = $body;
    this.participantCount = $participantCount;
    this.fileCount = $fileCount;
    this.activityCount = $activityCount;
    this.isActive = $isActive;
    this.canJoin = $canJoin;
    this.hasOnGoingActivity = $hasOnGoingActivity;
    this.createdDate = $createdDate;
    this.updatedDate = $updatedDate;
    this.creator = $creator;
    this.roomOptions = $roomOptions;
  }

  static fromFirestore(snap: any) {
    if (snap === null || !snap.exists) return null;
    const data = snap.data() || {};
    return Room.fromMap({ ...data, roomId: snap.id });
  }

  static fromMap(data: any) {
    return new Room(
      data.roomId,
      data.name,
      data.imageUrl,
      data.body,
      data.participantCount,
      data.fileCount,
      data.activityCount,
      data.isActive,
      data.canJoin,
      data.hasOnGoingActivity,
      data.createdDate,
      data.updatedDate,
      Host.fromMap(data.creator ?? {}),
      data.roomOptions,
    );
  }

  toMap() {
    return {
      roomId: this.roomId ?? null,
      name: this.name ?? null,
      imageUrl: this.imageUrl ?? null,
      body: this.body ?? null,
      participantCount: this.participantCount ?? 0,
      fileCount: this.fileCount ?? 0,
      activityCount: this.activityCount ?? 0,
      isActive: this.isActive ?? true,
      canJoin: this.canJoin ?? true,
      hasOnGoingActivity: this.hasOnGoingActivity ?? false,
      createdDate: this.createdDate ?? new Date(),
      updatedDate: this.updatedDate ?? new Date(),
      creator: this.creator.toMap() ?? null,
      roomOptions: this.roomOptions ?? {},
    };
  }
}
