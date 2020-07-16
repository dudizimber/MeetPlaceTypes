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
exports.Activity = void 0;
var host_1 = require("./host");
var room_1 = require("./room");
var firestore_1 = require("@google-cloud/firestore");
var Activity = /** @class */ (function () {
    function Activity($activityId, $name, $imageUrl, $body, $participantCount, $fileCount, $activityCategory, $isActive, $activityType, $activityOptions, $createdDate, $updatedDate, $creator, $activityStatus, $nextActivityInstance, $schedulingOptions, $room) {
        this.activityId = $activityId;
        this.name = $name;
        this.imageUrl = $imageUrl;
        this.body = $body;
        this.participantCount = $participantCount;
        this.fileCount = $fileCount;
        this.activityCategory = $activityCategory;
        this.isActive = $isActive;
        this.activityType = $activityType;
        this.activityOptions = $activityOptions;
        this.createdDate = $createdDate;
        this.updatedDate = $updatedDate;
        this.creator = $creator;
        this.activityStatus = $activityStatus;
        this.nextActivityInstance = $nextActivityInstance;
        this.schedulingOptions = $schedulingOptions;
        this.room = $room;
    }
    Activity.fromFirestore = function (snap) {
        if (snap === null || !snap.exists)
            return null;
        var data = snap.data() || {};
        data.schedulingOptions.startDate = data.schedulingOptions.startDate instanceof firestore_1.Timestamp ? data.schedulingOptions.startDate.toDate() : data.schedulingOptions.startDate;
        data.schedulingOptions.endDate = data.schedulingOptions.endDate instanceof firestore_1.Timestamp ? data.schedulingOptions.endDate.toDate() : data.schedulingOptions.endDate;
        return Activity.fromMap(__assign(__assign({}, data), { activityId: snap.id }));
    };
    Activity.fromMap = function (data) {
        var _a, _b;
        return new Activity(data.activityId, data.name, data.imageUrl, data.body, data.participantCount, data.fileCount, data.activityCategory, data.isActive, data.activityType, data.activityOptions, data.createdDate, data.updatedDate, host_1.Host.fromMap((_a = data.creator) !== null && _a !== void 0 ? _a : {}), data.activityStatus, data.nextActivityInstance, data.schedulingOptions, room_1.Room.fromMap((_b = data.room) !== null && _b !== void 0 ? _b : {}));
    };
    Activity.prototype.toMap = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        return {
            'activityId': (_a = this.activityId) !== null && _a !== void 0 ? _a : null,
            'name': (_b = this.name) !== null && _b !== void 0 ? _b : null,
            'imageUrl': (_c = this.imageUrl) !== null && _c !== void 0 ? _c : null,
            'body': (_d = this.body) !== null && _d !== void 0 ? _d : null,
            'participantCount': (_e = this.participantCount) !== null && _e !== void 0 ? _e : 0,
            'fileCount': (_f = this.fileCount) !== null && _f !== void 0 ? _f : 0,
            'activityCategory': (_g = this.activityCategory) !== null && _g !== void 0 ? _g : null,
            'isActive': (_h = this.isActive) !== null && _h !== void 0 ? _h : true,
            'activityType': (_j = this.activityType) !== null && _j !== void 0 ? _j : null,
            'activityOptions': (_k = this.activityOptions) !== null && _k !== void 0 ? _k : null,
            'createdDate': (_l = this.createdDate) !== null && _l !== void 0 ? _l : new Date(),
            'updatedDate': (_m = this.updatedDate) !== null && _m !== void 0 ? _m : new Date(),
            'creator': (_o = this.creator.toMap()) !== null && _o !== void 0 ? _o : null,
            'activityStatus': (_p = this.activityStatus) !== null && _p !== void 0 ? _p : null,
            'nextActivityInstance': (_q = this.nextActivityInstance) !== null && _q !== void 0 ? _q : null,
            'schedulingOptions': (_r = this.schedulingOptions) !== null && _r !== void 0 ? _r : null,
            'room': (_s = this.room.toMap()) !== null && _s !== void 0 ? _s : null
        };
    };
    return Activity;
}());
exports.Activity = Activity;
