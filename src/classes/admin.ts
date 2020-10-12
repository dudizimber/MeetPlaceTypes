import { User } from '../interfaces/user';
import { Host } from './host';
import { ADMIN_HOST_AVATAR } from '../constants/constants';

export class Admin implements User {
  
  constructor(
    public firstName: string, 
    public lastName: string, 
    public email: string, 
    public adminId: string, 
    public documentId: string,
    public avatar: string | null,
    ) {}

  public get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  static fromMap(data: any) {
    return new Admin(data.firstName, data.lastName, data.email, data.adminId, data.documentId, data.avatar);
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
      avatar: this.avatar,
    };
  }

  toHost(): Host {
    return new Host(this.firstName, this.lastName, this.email, this.adminId, 0, ADMIN_HOST_AVATAR, this.documentId);
  }
}
