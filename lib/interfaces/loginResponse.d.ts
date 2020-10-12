export interface LoginResponse extends Response {
  data: {
    token: string;
  } | null;
}
