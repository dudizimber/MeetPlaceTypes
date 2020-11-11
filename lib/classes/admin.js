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
exports.Admin = void 0;
var host_1 = require('./host');
var constants_1 = require('../constants/constants');
var Admin = /** @class */ (function () {
  function Admin(firstName, lastName, email, adminId, documentId, avatar, meetingParticipantId) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.adminId = adminId;
    this.documentId = documentId;
    this.avatar = avatar;
    this.meetingParticipantId = meetingParticipantId;
  }
  Object.defineProperty(Admin.prototype, 'fullName', {
    get: function () {
      return this.firstName + ' ' + this.lastName;
    },
    enumerable: false,
    configurable: true,
  });
  Admin.fromMap = function (data) {
    return new Admin(
      data.firstName,
      data.lastName,
      data.email,
      data.adminId,
      data.documentId,
      data.avatar,
      data.meetingParticipantId,
    );
  };
  Admin.fromFirestore = function (snapshot) {
    return Admin.fromMap(__assign(__assign({}, snapshot.data()), { adminId: snapshot.id }));
  };
  Admin.prototype.toMap = function () {
    var _a, _b, _c, _d, _e, _f;
    var data = {
      adminId: (_a = this.adminId) !== null && _a !== void 0 ? _a : null,
      firstName: (_b = this.firstName) !== null && _b !== void 0 ? _b : null,
      lastName: (_c = this.lastName) !== null && _c !== void 0 ? _c : null,
      email: (_d = this.email) !== null && _d !== void 0 ? _d : null,
      documentId: (_e = this.documentId) !== null && _e !== void 0 ? _e : null,
      avatar: (_f = this.avatar) !== null && _f !== void 0 ? _f : null,
    };
    if (this.meetingParticipantId) data['meetingParticipantId'] = this.meetingParticipantId;
    return data;
  };
  Admin.prototype.toHost = function () {
    return new host_1.Host(
      this.firstName,
      this.lastName,
      this.email,
      this.adminId,
      0,
      constants_1.ADMIN_HOST_AVATAR,
      this.documentId,
    );
  };
  return Admin;
})();
exports.Admin = Admin;
