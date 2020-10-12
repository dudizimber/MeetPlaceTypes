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
  function Admin($firstName, $lastName, $email, $adminId, $documentId) {
    this.adminId = $adminId;
    this.firstName = $firstName;
    this.lastName = $lastName;
    this.email = $email;
    this.documentId = $documentId;
  }
  Object.defineProperty(Admin.prototype, 'fullName', {
    get: function () {
      return this.firstName + ' ' + this.lastName;
    },
    enumerable: false,
    configurable: true,
  });
  Admin.fromMap = function (data) {
    return new Admin(data.firstName, data.lastName, data.email, data.adminId, data.documentId);
  };
  Admin.fromFirestore = function (snapshot) {
    return Admin.fromMap(__assign(__assign({}, snapshot.data()), { adminId: snapshot.id }));
  };
  Admin.prototype.toMap = function () {
    return {
      adminId: this.adminId,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      documentId: this.documentId,
    };
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
