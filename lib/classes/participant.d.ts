import { User } from '../interfaces/user';
export declare class Participant implements User {
  firstName: string;
  lastName: string;
  email: string;
  participantId: string;
  roomCount: number;
  avatar: string;
  documentId: string;
  constructor(
    firstName: string,
    lastName: string,
    email: string,
    participantId: string,
    roomCount: number,
    avatar: string,
    documentId: string,
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
