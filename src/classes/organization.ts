import { OrganizationType } from '../enums/organization-type';
import { OrganizationMap } from '../interfaces/organizationMap';

export class Organization {
  constructor(
    public organizationId: string,
    public name: string,
    public logoUrl: string,
    public tenantId: string,
    public email: string,
    public city: string,
    public country: string,
    public organizationType: OrganizationType,
  ) {}

  static fromFirestore(snap: any) {
    const data = snap.data() || {};
    data.organizationId = snap.id;
    return Organization.fromMap(data);
  }

  static fromMap(data: any) {
    return new Organization(
      data.organizationId,
      data.name,
      data.logoUrl,
      data.tenantId,
      data.email,
      data.city,
      data.country,
      data.organizationType,
    );
  }

  toMap() {
    return {
      organizationId: this.organizationId,
      name: this.name,
      logoUrl: this.logoUrl,
      tenantId: this.tenantId,
      email: this.email,
      city: this.city,
      country: this.country,
      organizationType: this.organizationType,
    };
  }

  toOrganizationMap(): OrganizationMap {
    return {
      name: this.name,
      organizationId: this.organizationId,
      tenantId: this.tenantId,
    };
  }
}
