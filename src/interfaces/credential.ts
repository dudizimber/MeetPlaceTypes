import { CredentialService } from "../enums/credential-service";
import { CredentialData } from "./credentialData";

export interface Credential {
    credentialId: string;
    credentialData: CredentialData;
    credentialService: CredentialService;
    ownerEmail: string;
    ownerId: string;
}