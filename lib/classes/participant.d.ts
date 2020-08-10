import { User } from '../interfaces/user';
export declare class Participant implements User {
  participantId: string;
  roomCount: number;
  avatar: string;
  firstName: string;
  lastName: string;
  email: string;
  documentId: string;
  fullName: string;
  constructor(
    $firstName: string,
    $lastName: string,
    $email: string,
    $participantId: string,
    $roomCount: number,
    $avatar: string,
    $documentId: string,
  );
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
