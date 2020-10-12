import { LoginMethod } from "../enums";

export interface LoginRequest {
    method: LoginMethod;
    tenantId: string;
    organizationId: string;
    email: string | null;
    password: string | null;
    face_image: string | null;
}