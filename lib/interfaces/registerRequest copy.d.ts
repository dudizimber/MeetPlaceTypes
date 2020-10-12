import { LoginMethod } from '../enums';
import { LoginFaceRecData } from './loginFaceRecData';
import { LoginPasswordData } from './loginPasswordData';
import { User } from './user';
export interface RegisterRequest {
  method: LoginMethod;
  loginData: LoginFaceRecData | LoginPasswordData;
  user: User;
}
