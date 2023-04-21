import { AxiosResponse } from "axios";

export interface AuthorizationData {
  email: string;
  password: string;
}

export interface RegistrationData {
  username: string;
  password: string;
  email: string;
}

// interface LoginResponseSuccess {
//   token: string;
//   firstName: string;
//   lastName: string;
//   email: string;
// }
//
// interface LoginResponseError {
//   message: string;
// }
//
// interface RegistrationResponseSuccess {
//   message: string;
// }
//
// interface RegistrationResponseError {
//   message: string;
// }
//
// export type LoginResponse = AxiosResponse<
//   LoginResponseSuccess | LoginResponseError
// >;
//
// export type RegistrationResponse = AxiosResponse<
//   RegistrationResponseSuccess | RegistrationResponseError
// >;
