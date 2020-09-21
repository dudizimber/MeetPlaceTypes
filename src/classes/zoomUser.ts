import { Role } from '../enums';
import { Admin } from './admin';
import { Host } from './host';
import { Participant } from './participant';

export class ZoomUser {
  constructor(public zoomUserId: string, public user: Admin | Host | Participant, public role: Role) {}

  static fromMap(map: any) {
    if (!map) return null;

    let user;
    switch (map.role) {
      case Role.Admin:
        user = Admin.fromMap(map.user);
        break;

      case Role.Admin:
        user = Host.fromMap(map.user);
        break;
      default:
        user = Participant.fromMap(map.user);
    }

    return new ZoomUser(map.zoomUserId, user, map.role);
  }
  
  static fromFirestore(snap: any) {
    return this.fromMap(snap.data());
  }

  toMap() {
    return {
      zoomUserId: this.zoomUserId,
      user: this.user.toMap(),
      role: this.role,
    };
  }
}
