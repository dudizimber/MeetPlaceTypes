import { Role } from '../enums';
import { Admin } from './admin';
import { Host } from './host';
import { Participant } from './participant';
export declare class ZoomUser {
  zoomUserId: string;
  user: Admin | Host | Participant;
  role: Role;
  constructor(zoomUserId: string, user: Admin | Host | Participant, role: Role);
  static fromMap(map: any): ZoomUser;
  static fromFirestore(snap: any): ZoomUser;
  toMap(): {
    zoomUserId: string;
    user:
      | {
          firstName: string;
          lastName: string;
          email: string;
          hostId: string;
          roomCount: number;
          avatar: string;
          documentId: string;
        }
      | {
          adminId: string;
          firstName: string;
          lastName: string;
          email: string;
          documentId: string;
        };
    role: Role;
  };
}
