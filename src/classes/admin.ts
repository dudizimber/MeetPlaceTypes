import { User } from '../interfaces/user';
import { Host } from './host';
import { ADMIN_HOST_AVATAR } from '../constants/constants';

export class Admin implements User {
  adminId: string;
  firstName: string;
  lastName: string;
  email: string;
  documentId: string;

  constructor($firstName: string, $lastName: string, $email: string, $adminId: string, $documentId: string) {
    this.adminId = $adminId;
    this.firstName = $firstName;
    this.lastName = $lastName;
    this.email = $email;
    this.documentId = $documentId;
  }
  
  public get fullName() : string {
    return `${this.firstName} ${this.lastName}`;
  }

  static fromMap(data: any) {
    return new Admin(data.firstName, data.lastName, data.email, data.adminId, data.documentId);
  }

  static fromFirestore(snapshot: any) {
    return Admin.fromMap({ ...snapshot.data(), adminId: snapshot.id });
  }

  toMap() {
    return {
      adminId: this.adminId,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      documentId: this.documentId,
    };
  }

  toHost(): Host {
    return new Host(this.firstName, this.lastName, this.email, this.adminId, 0, ADMIN_HOST_AVATAR, this.documentId);
  }
}
