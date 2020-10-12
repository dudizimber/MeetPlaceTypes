import { User } from '../interfaces/user';
export declare class Host implements User {
  firstName: string;
  lastName: string;
  email: string;
  hostId: string;
  roomCount: number;
  avatar: string;
  documentId: string;
  constructor(
    firstName: string,
    lastName: string,
    email: string,
    hostId: string,
    roomCount: number,
    avatar: string,
    documentId: string,
  );
  get fullName(): string;
  static fromFirestore(snap: any): Host;
  static fromMap(data: any): Host;
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
