import { User } from '../interfaces/user';
export declare class Participant implements User {
  firstName: string;
  lastName: string;
  email: string;
  participantId: string;
  roomCount: number;
  avatar: string | null;
  documentId: string | null;
  meetingId?: string;
  constructor(
    firstName: string,
    lastName: string,
    email: string,
    participantId: string,
    roomCount: number,
    avatar: string | null,
    documentId: string | null,
    meetingId?: string,
  );
  get fullName(): string;
  static fromFirestore(snap: any): Participant;
  static fromMap(data: any): Participant;
  toMap(): {
    firstName: string;
    lastName: string;
    email: string;
    hostId: string;
    roomCount: number;
    avatar: string;
    documentId: string;
  };
}
