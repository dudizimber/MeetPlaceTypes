"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityInstance = void 0;
var activity_1 = require("./activity");
var ActivityInstance = /** @class */ (function () {
    function ActivityInstance($activityInstanceId, $activity, $participantCount, $activityType, $activityOptions, $activityInstanceStatus, $fileCount, $startDate, $endDate) {
        this.isNext = false;
        this.activityInstanceId = $activityInstanceId;
        this.activity = $activity instanceof activity_1.Activity ? $activity : activity_1.Activity.fromMap($activity);
        this.participantCount = $participantCount;
        this.activityType = $activityType;
        this.activityOptions = $activityOptions;
        this.activityInstanceStatus = $activityInstanceStatus;
        this.fileCount = $fileCount;
        this.startDate = $startDate;
        this.endDate = $endDate;
    }
    ActivityInstance.fromFirestore = function (snapshot) {
        return ActivityInstance.fromMap(__assign(__assign({}, snapshot.data()), { activityInstanceId: snapshot.id }));
    };
    ActivityInstance.fromMap = function (data) {
        var startDate;
        var endDate;
        try {
            startDate = data.startDate.toDate();
            endDate = data.endDate.toDate();
        }
        catch (error) {
            startDate = data.startDate;
            endDate = data.endDate;
        }
        return new ActivityInstance(data.activityInstanceId, data.activity, data.participantCount, data.activityType, data.activityOptions, data.activityInstanceStatus, data.fileCount, startDate, endDate);
    };
    ActivityInstance.prototype.toMap = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        return {
            activityInstanceId: (_a = this.activityInstanceId) !== null && _a !== void 0 ? _a : null,
            activity: (_b = this.activity.toMap()) !== null && _b !== void 0 ? _b : null,
            participantCount: (_c = this.participantCount) !== null && _c !== void 0 ? _c : 0,
            activityType: (_d = this.activityType) !== null && _d !== void 0 ? _d : null,
            activityOptions: (_e = this.activityOptions) !== null && _e !== void 0 ? _e : null,
            activityInstanceStatus: (_f = this.activityInstanceStatus) !== null && _f !== void 0 ? _f : null,
            fileCount: (_g = this.fileCount) !== null && _g !== void 0 ? _g : 0,
            startDate: (_h = this.startDate) !== null && _h !== void 0 ? _h : new Date(),
            endDate: (_j = this.endDate) !== null && _j !== void 0 ? _j : new Date(),
            isNext: (_k = this.isNext) !== null && _k !== void 0 ? _k : false,
        };
    };
    return ActivityInstance;
}());
exports.ActivityInstance = ActivityInstance;
