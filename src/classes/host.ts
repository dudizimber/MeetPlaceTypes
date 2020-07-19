import { User } from '../interfaces/user';

export class Host implements User {
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
  ) {
    this.hostId = $hostId;
    this.roomCount = $roomCount ?? 0;
    this.avatar = $avatar;
    this.firstName = $firstName;
    this.lastName = $lastName;
    this.email = $email;
    this.documentId = $documentId;

    this.fullName = `${this.firstName} ${this.lastName}`;
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
    );
  }

  toMap() {
    return {
      firstName: this.firstName ?? null,
      lastName: this.lastName ?? null,
      email: this.email ?? null,
      hostId: this.hostId ?? null,
      roomCount: this.roomCount ?? 0,
      avatar: this.avatar ?? null,
      documentId: this.documentId ?? null,
    };
  }
}
