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
exports.Participant = void 0;
var Participant = /** @class */ (function () {
  function Participant(firstName, lastName, email, participantId, roomCount, avatar, documentId, meetingId) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.participantId = participantId;
    this.roomCount = roomCount;
    this.avatar = avatar;
    this.documentId = documentId;
    this.meetingId = meetingId;
  }
  Object.defineProperty(Participant.prototype, 'fullName', {
    get: function () {
      return this.firstName + ' ' + this.lastName;
    },
    enumerable: false,
    configurable: true,
  });
  Participant.fromFirestore = function (snap) {
    if (snap === null) return null;
    var data = snap.data() || {};
    return Participant.fromMap(__assign(__assign({}, data), { participantId: snap.id }));
  };
  Participant.fromMap = function (data) {
    return new Participant(
      data.firstName,
      data.lastName,
      data.email,
      data.participantId,
      data.roomCount,
      data.avatar,
      data.documentId,
      data.meetingId,
    );
  };
  Participant.prototype.toMap = function () {
    var _a, _b, _c, _d, _e, _f, _g;
    var data = {
      firstName: (_a = this.firstName) !== null && _a !== void 0 ? _a : null,
      lastName: (_b = this.lastName) !== null && _b !== void 0 ? _b : null,
      email: (_c = this.email) !== null && _c !== void 0 ? _c : null,
      hostId: (_d = this.participantId) !== null && _d !== void 0 ? _d : null,
      roomCount: (_e = this.roomCount) !== null && _e !== void 0 ? _e : 0,
      avatar: (_f = this.avatar) !== null && _f !== void 0 ? _f : null,
      documentId: (_g = this.documentId) !== null && _g !== void 0 ? _g : null,
    };
    if (this.meetingId) data['meetingId'] = this.meetingId;
    return data;
  };
  return Participant;
})();
exports.Participant = Participant;
