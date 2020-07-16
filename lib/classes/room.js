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
exports.Room = void 0;
var host_1 = require("./host");
var Room = /** @class */ (function () {
    function Room($roomId, $name, $imageUrl, $body, $participantCount, $fileCount, $activityCount, $isActive, $canJoin, $hasOnGoingActivity, $createdDate, $updatedDate, $creator, $roomOptions) {
        this.roomId = $roomId;
        this.name = $name;
        this.imageUrl = $imageUrl;
        this.body = $body;
        this.participantCount = $participantCount;
        this.fileCount = $fileCount;
        this.activityCount = $activityCount;
        this.isActive = $isActive;
        this.canJoin = $canJoin;
        this.hasOnGoingActivity = $hasOnGoingActivity;
        this.createdDate = $createdDate;
        this.updatedDate = $updatedDate;
        this.creator = $creator;
        this.roomOptions = $roomOptions;
    }
    Room.fromFirestore = function (snap) {
        if (snap === null || !snap.exists)
            return null;
        var data = snap.data() || {};
        return Room.fromMap(__assign(__assign({}, data), { roomId: snap.id }));
    };
    Room.fromMap = function (data) {
        var _a;
        return new Room(data.roomId, data.name, data.imageUrl, data.body, data.participantCount, data.fileCount, data.activityCount, data.isActive, data.canJoin, data.hasOnGoingActivity, data.createdDate, data.updatedDate, host_1.Host.fromMap((_a = data.creator) !== null && _a !== void 0 ? _a : {}), data.roomOptions);
    };
    Room.prototype.toMap = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        return {
            'roomId': (_a = this.roomId) !== null && _a !== void 0 ? _a : null,
            'name': (_b = this.name) !== null && _b !== void 0 ? _b : null,
            'imageUrl': (_c = this.imageUrl) !== null && _c !== void 0 ? _c : null,
            'body': (_d = this.body) !== null && _d !== void 0 ? _d : null,
            'participantCount': (_e = this.participantCount) !== null && _e !== void 0 ? _e : 0,
            'fileCount': (_f = this.fileCount) !== null && _f !== void 0 ? _f : 0,
            'activityCount': (_g = this.activityCount) !== null && _g !== void 0 ? _g : 0,
            'isActive': (_h = this.isActive) !== null && _h !== void 0 ? _h : true,
            'canJoin': (_j = this.canJoin) !== null && _j !== void 0 ? _j : true,
            'hasOnGoingActivity': (_k = this.hasOnGoingActivity) !== null && _k !== void 0 ? _k : false,
            'createdDate': (_l = this.createdDate) !== null && _l !== void 0 ? _l : new Date(),
            'updatedDate': (_m = this.updatedDate) !== null && _m !== void 0 ? _m : new Date(),
            'creator': (_o = this.creator.toMap()) !== null && _o !== void 0 ? _o : null,
            'roomOptions': (_p = this.roomOptions) !== null && _p !== void 0 ? _p : {}
        };
    };
    return Room;
}());
exports.Room = Room;
