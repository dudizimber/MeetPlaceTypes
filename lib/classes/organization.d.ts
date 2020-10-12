import { OrganizationType } from '../enums/organization-type';
import { OrganizationMap } from '../interfaces/organizationMap';
export declare class Organization {
  organizationId: string;
  name: string;
  logoUrl: string;
  tenantId: string;
  email: string;
  city: string;
  country: string;
  organizationType: OrganizationType;
  constructor(
    organizationId: string,
    name: string,
    logoUrl: string,
    tenantId: string,
    email: string,
    city: string,
    country: string,
    organizationType: OrganizationType,
  );
  static fromFirestore(snap: any): Organization;
  static fromMap(data: any): Organization;
  toMap(): {
    organizationId: string;
    name: string;
    logoUrl: string;
    tenantId: string;
    email: string;
    city: string;
    country: string;
    organizationType: OrganizationType;
  };
  toOrganizationMap(): OrganizationMap;
}
