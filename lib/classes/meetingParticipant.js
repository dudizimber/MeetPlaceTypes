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
exports.MeetingParticipant = void 0;
var activityInstance_1 = require('./activityInstance');
var MeetingParticipant = /** @class */ (function () {
  function MeetingParticipant(
    meetingParticipantId,
    firstName,
    lastName,
    email,
    externalId,
    activityInstance,
    joinDate,
  ) {
    this.meetingParticipantId = meetingParticipantId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.externalId = externalId;
    this.activityInstance = activityInstance;
    this.joinDate = joinDate;
  }
  Object.defineProperty(MeetingParticipant.prototype, 'fullName', {
    get: function () {
      return this.firstName + ' ' + this.lastName;
    },
    enumerable: false,
    configurable: true,
  });
  MeetingParticipant.fromFirestore = function (snap) {
    if (snap === null) return null;
    var data = snap.data() || {};
    var joinDate = data.joinDate.toDate();
    return MeetingParticipant.fromMap(
      __assign(__assign({}, data), { meetingParticipantId: snap.id, joinDate: joinDate }),
    );
  };
  MeetingParticipant.fromParticipant = function (participant, externalId, instance) {
    return new MeetingParticipant(
      participant.participantId,
      participant.firstName,
      participant.lastName,
      participant.email,
      externalId,
      instance,
      new Date(),
    );
  };
  MeetingParticipant.fromHost = function (host, externalId, instance) {
    return new MeetingParticipant(
      host.hostId,
      host.firstName,
      host.lastName,
      host.email,
      externalId,
      instance,
      new Date(),
    );
  };
  MeetingParticipant.fromAdmin = function (admin, externalId, instance) {
    return new MeetingParticipant(
      admin.adminId,
      admin.firstName,
      admin.lastName,
      admin.email,
      externalId,
      instance,
      new Date(),
    );
  };
  MeetingParticipant.fromMap = function (data) {
    return new MeetingParticipant(
      data.meetingParticipantId,
      data.firstName,
      data.lastName,
      data.email,
      data.externalId,
      activityInstance_1.ActivityInstance.fromMap(data.activityInstance),
      data.joinDate,
    );
  };
  MeetingParticipant.prototype.toMap = function () {
    var data = {
      meetingParticipantId: this.meetingParticipantId,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      externalId: this.externalId,
      activityInstance: this.activityInstance.toMap(),
      joinDate: this.joinDate,
    };
    return data;
  };
  return MeetingParticipant;
})();
exports.MeetingParticipant = MeetingParticipant;
