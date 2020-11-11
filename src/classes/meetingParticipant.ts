import { ActivityInstance } from "./activityInstance";
import { Admin } from "./admin";
import { Host } from "./host";
import { Participant } from "./participant";

export class MeetingParticipant {
  constructor(
    public meetingParticipantId: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public externalId: string,
    public activityInstance: ActivityInstance,
    public joinDate: Date,
  ) {}

  public get fullName() : string {
    return `${this.firstName} ${this.lastName}`;
  }

  static fromFirestore(snap: any) {
    if (snap === null) return null;
    const data = snap.data() || {};
    const joinDate = data.joinDate.toDate();
    return MeetingParticipant.fromMap({ ...data, meetingParticipantId: snap.id, joinDate });
  }

  static fromParticipant(participant: Participant, externalId: string, instance: ActivityInstance) {
    return new MeetingParticipant(
        participant.participantId,
        participant.firstName,
        participant.lastName,
        participant.email,
        externalId,
        instance,
        new Date()
    ); 
  }

  static fromHost(host: Host, externalId: string, instance: ActivityInstance) {
    return new MeetingParticipant(
        host.hostId,
        host.firstName,
        host.lastName,
        host.email,
        externalId,
        instance,
        new Date()
    ); 
  }

  static fromAdmin(admin: Admin, externalId: string, instance: ActivityInstance) {
    return new MeetingParticipant(
        admin.adminId,
        admin.firstName,
        admin.lastName,
        admin.email,
        externalId,
        instance,
        new Date()
    ); 
  }

  static fromMap(data: any) {
    return new MeetingParticipant(
        data.meetingParticipantId,
        data.firstName,
        data.lastName,
        data.email,
        data.externalId,
        ActivityInstance.fromMap(data.activityInstance),
        data.joinDate,
    );
  }

  toMap() {
    const data = {
        meetingParticipantId: this.meetingParticipantId,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        externalId: this.externalId,
        activityInstance: this.activityInstance.toMap(),
        joinDate: this.joinDate,
    };
    return data;
  }
}
