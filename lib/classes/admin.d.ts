import { User } from '../interfaces/user';
import { Host } from './host';
export declare class Admin implements User {
  firstName: string;
  lastName: string;
  email: string;
  adminId: string;
  documentId: string;
  avatar: string | null;
  meetingParticipantId?: string;
  constructor(
    firstName: string,
    lastName: string,
    email: string,
    adminId: string,
    documentId: string,
    avatar: string | null,
    meetingParticipantId?: string,
  );
  get fullName(): string;
  static fromMap(data: any): Admin;
  static fromFirestore(snapshot: any): Admin;
  toMap(): {
    adminId: string;
    firstName: string;
    lastName: string;
    email: string;
    documentId: string;
    avatar: string;
  };
  toHost(): Host;
}
