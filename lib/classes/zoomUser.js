'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ZoomUser = void 0;
var enums_1 = require('../enums');
var admin_1 = require('./admin');
var host_1 = require('./host');
var participant_1 = require('./participant');
var ZoomUser = /** @class */ (function () {
  function ZoomUser(zoomUserId, user, role) {
    this.zoomUserId = zoomUserId;
    this.user = user;
    this.role = role;
  }
  ZoomUser.fromMap = function (map) {
    if (!map) return null;
    var user;
    switch (map.role) {
      case enums_1.Role.Admin:
        user = admin_1.Admin.fromMap(map.user);
        break;
      case enums_1.Role.Admin:
        user = host_1.Host.fromMap(map.user);
        break;
      default:
        user = participant_1.Participant.fromMap(map.user);
    }
    return new ZoomUser(map.zoomUserId, user, map.role);
  };
  ZoomUser.fromFirestore = function (snap) {
    return this.fromMap(snap.data());
  };
  ZoomUser.prototype.toMap = function () {
    return {
      zoomUserId: this.zoomUserId,
      user: this.user.toMap(),
      role: this.role,
    };
  };
  return ZoomUser;
})();
exports.ZoomUser = ZoomUser;
