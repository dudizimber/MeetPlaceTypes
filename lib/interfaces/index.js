'use strict';
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k];
          },
        });
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __exportStar =
  (this && this.__exportStar) ||
  function (m, exports) {
    for (var p in m) if (p !== 'default' && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
  };
Object.defineProperty(exports, '__esModule', { value: true });
__exportStar(require('./activityOptions'), exports);
__exportStar(require('./audioQuality'), exports);
__exportStar(require('./organizationMap'), exports);
__exportStar(require('./schedulingOptions'), exports);
__exportStar(require('./time'), exports);
__exportStar(require('./user'), exports);
__exportStar(require('./videoConferenceOptions'), exports);
__exportStar(require('./videoQuality'), exports);
__exportStar(require('./scheduledTask'), exports);
__exportStar(require('./taskEndActivityInstance'), exports);
__exportStar(require('./taskStartActivityInstance'), exports);
__exportStar(require('./videoConferenceServiceOptions'), exports);
__exportStar(require('./videoConferenceServiceOptionsLiveswitch'), exports);
__exportStar(require('./videoConferenceServiceOptionsZoom'), exports);
