'use strict';
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.Host = void 0;
var Host = /** @class */ (function () {
  function Host(firstName, lastName, email, hostId, roomCount, avatar, documentId, meetingParticipantId) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.hostId = hostId;
    this.roomCount = roomCount;
    this.avatar = avatar;
    this.documentId = documentId;
    this.meetingParticipantId = meetingParticipantId;
  }
  Object.defineProperty(Host.prototype, 'fullName', {
    get: function () {
      return this.firstName + ' ' + this.lastName;
    },
    enumerable: false,
    configurable: true,
  });
  Host.fromFirestore = function (snap) {
    if (snap === null) return null;
    var data = snap.data() || {};
    return Host.fromMap(__assign(__assign({}, data), { hostId: snap.id }));
  };
  Host.fromMap = function (data) {
    return new Host(
      data.firstName,
      data.lastName,
      data.email,
      data.hostId,
      data.roomCount,
      data.avatar,
      data.documentId,
      data.meetingParticipantId,
    );
  };
  Host.prototype.toMap = function () {
    var _a, _b, _c, _d, _e, _f, _g;
    var data = {
      firstName: (_a = this.firstName) !== null && _a !== void 0 ? _a : null,
      lastName: (_b = this.lastName) !== null && _b !== void 0 ? _b : null,
      email: (_c = this.email) !== null && _c !== void 0 ? _c : null,
      hostId: (_d = this.hostId) !== null && _d !== void 0 ? _d : null,
      roomCount: (_e = this.roomCount) !== null && _e !== void 0 ? _e : 0,
      avatar: (_f = this.avatar) !== null && _f !== void 0 ? _f : null,
      documentId: (_g = this.documentId) !== null && _g !== void 0 ? _g : null,
    };
    if (this.meetingParticipantId) data['meetingParticipantId'] = this.meetingParticipantId;
    return data;
  };
  return Host;
})();
exports.Host = Host;
