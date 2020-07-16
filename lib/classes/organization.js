"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organization = void 0;
var Organization = /** @class */ (function () {
    function Organization($organizationId, $name, $logoUrl, $tenantId, $email, $city, $country, $organizationType) {
        this.organizationId = $organizationId;
        this.name = $name;
        this.logoUrl = $logoUrl;
        this.tenantId = $tenantId;
        this.email = $email;
        this.city = $city;
        this.country = $country;
        this.organizationType = $organizationType;
    }
    Organization.fromFirestore = function (snap) {
        var data = snap.data() || {};
        data.organizationId = snap.id;
        return Organization.fromMap(data);
    };
    Organization.fromMap = function (data) {
        return new Organization(data.organizationId, data.name, data.logoUrl, data.tenantId, data.email, data.city, data.country, data.organizationType);
    };
    Organization.prototype.toMap = function () {
        return {
            organizationId: this.organizationId,
            name: this.name,
            logoUrl: this.logoUrl,
            tenantId: this.tenantId,
            email: this.email,
            city: this.city,
            country: this.country,
            organizationType: this.organizationType
        };
    };
    Organization.prototype.toOrganizationMap = function () {
        return {
            name: this.name,
            organizationId: this.organizationId,
            tenantId: this.tenantId
        };
    };
    return Organization;
}());
exports.Organization = Organization;
