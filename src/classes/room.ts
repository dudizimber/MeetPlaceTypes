import { Host } from './host';
import { RoomOptions } from './roomOptions';

export class Room {

  constructor(
    public roomId: string,
    public name: string,
    public imageUrl: string,
    public body: any,
    public participantCount: number,
    public fileCount: number,
    public activityCount: number,
    public isActive: boolean,
    public canJoin: boolean,
    public hasOnGoingActivity: boolean,
    public createdDate: Date,
    public updatedDate: Date,
    public creator: Host,
    public roomOptions: RoomOptions,
  ) { }

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
