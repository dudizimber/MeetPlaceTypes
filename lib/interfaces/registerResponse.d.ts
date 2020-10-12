import { LoginMethod } from '../enums';
export interface RegisterResponse extends Response {
  method: LoginMethod;
  data: {
    password: string | null;
    token: string | null;
  } | null;
}
