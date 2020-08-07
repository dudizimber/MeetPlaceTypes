import { User } from '../interfaces/user';
export declare class Host implements User {
  hostId: string;
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
    $hostId: string,
    $roomCount: number,
    $avatar: string,
    $documentId: string,
  );
  static fromFirestore(snap: any): Host | null;
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
