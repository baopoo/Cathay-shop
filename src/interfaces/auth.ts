export interface IAuthResponse {
  email: string;
  password: string;
}

export interface ISignUpPayload {
  email: string;
  password: string;
  name: string;
}

export interface ISignInPayload {
  email: string;
  password: string;
}
