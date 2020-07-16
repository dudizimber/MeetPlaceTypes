"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityInstance = void 0;
var ActivityInstance = /** @class */ (function () {
    function ActivityInstance($activityInstanceId, $participantCount, $activityType, $activityOptions, $activityInstanceStatus, $fileCount, $startDate, $endDate) {
        this.activityInstanceId = $activityInstanceId;
        this.participantCount = $participantCount;
        this.activityType = $activityType;
        this.activityOptions = $activityOptions;
        this.activityInstanceStatus = $activityInstanceStatus;
        this.fileCount = $fileCount;
        this.startDate = $startDate;
        this.endDate = $endDate;
    }
    ActivityInstance.prototype.toMap = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return {
            activityInstanceId: (_a = this.activityInstanceId) !== null && _a !== void 0 ? _a : null,
            participantCount: (_b = this.participantCount) !== null && _b !== void 0 ? _b : 0,
            activityType: (_c = this.activityType) !== null && _c !== void 0 ? _c : null,
            activityOptions: (_d = this.activityOptions) !== null && _d !== void 0 ? _d : null,
            activityInstanceStatus: (_e = this.activityInstanceStatus) !== null && _e !== void 0 ? _e : null,
            fileCount: (_f = this.fileCount) !== null && _f !== void 0 ? _f : 0,
            startDate: (_g = this.startDate) !== null && _g !== void 0 ? _g : new Date(),
            endDate: (_h = this.endDate) !== null && _h !== void 0 ? _h : new Date(),
        };
    };
    return ActivityInstance;
}());
exports.ActivityInstance = ActivityInstance;
