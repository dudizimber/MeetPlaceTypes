import { LoginMethod } from "../enums";
import { LoginFaceRecData } from "./loginFaceRecData";
import { LoginPasswordData } from "./loginPasswordData";

export interface LoginRequest {
    tenantId: string;
    organizationId: string;
    method: LoginMethod;
    data: LoginPasswordData | LoginFaceRecData;
}