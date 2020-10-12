import { LoginMethod } from "../enums";
import { Response } from "./response";

export interface RegisterResponse extends Response {
    method?: LoginMethod;
    data: {
        password: string | null,
        token: string | null
    } | null;
}