import { Response } from "./response";

export interface LoginResponse extends Response {
  data: {
    token: string;
  } | null;
}
