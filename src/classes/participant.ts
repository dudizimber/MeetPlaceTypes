import { User } from '../interfaces/user';

export class Participant implements User {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public participantId: string,
    public roomCount: number,
    public avatar: string | null,
    public documentId: string | null,
    public meetingParticipantId?: string,
  ) { }
  
  public get fullName() : string {
    return `${this.firstName} ${this.lastName}`;
  }

  static fromFirestore(snap: any) {
    if (snap === null) return null;
    const data = snap.data() || {};
    return Participant.fromMap({ ...data, participantId: snap.id });
  }

  static fromMap(data: any) {
    return new Participant(
      data.firstName,
      data.lastName,
      data.email,
      data.participantId,
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
      hostId: this.participantId ?? null,
      roomCount: this.roomCount ?? 0,
      avatar: this.avatar ?? null,
      documentId: this.documentId ?? null,
    };
    if (this.meetingParticipantId) data['meetingParticipantId'] = this.meetingParticipantId;
    return data;
  }
}
