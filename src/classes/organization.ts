import { OrganizationType } from '../enums/organization-type';
import { OrganizationMap } from '../interfaces/organizationMap';

export class Organization {
  organizationId: string;
  name: string;
  logoUrl: string;
  tenantId: string;
  email: string;
  city: string;
  country: string;
  organizationType: OrganizationType;

  constructor(
    $organizationId: string,
    $name: string,
    $logoUrl: string,
    $tenantId: string,
    $email: string,
    $city: string,
    $country: string,
    $organizationType: OrganizationType,
  ) {
    this.organizationId = $organizationId;
    this.name = $name;
    this.logoUrl = $logoUrl;
    this.tenantId = $tenantId;
    this.email = $email;
    this.city = $city;
    this.country = $country;
    this.organizationType = $organizationType;
  }

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
