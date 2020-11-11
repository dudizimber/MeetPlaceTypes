import { User } from '../interfaces/user';

export class Host implements User {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public hostId: string,
    public roomCount: number,
    public avatar: string,
    public documentId: string,
    public meetingParticipantId?: string,
  ) {}

  public get fullName() : string {
    return `${this.firstName} ${this.lastName}`;
  }

  static fromFirestore(snap: any) {
    if (snap === null) return null;
    const data = snap.data() || {};
    return Host.fromMap({ ...data, hostId: snap.id });
  }

  static fromMap(data: any) {
    return new Host(
      data.firstName,
      data.lastName,
      data.email,
      data.hostId,
      data.roomCount,
      data.avatar,
      data.documentId,
      data.meetingParticipantId
    );
  }

  toMap() {
    const data = {
      firstName: this.firstName ?? null,
      lastName: this.lastName ?? null,
      email: this.email ?? null,
      hostId: this.hostId ?? null,
      roomCount: this.roomCount ?? 0,
      avatar: this.avatar ?? null,
      documentId: this.documentId ?? null,
    };
    if (this.meetingParticipantId) data['meetingParticipantId'] = this.meetingParticipantId;
    return data;
  }
}
