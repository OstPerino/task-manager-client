import $api from "@/api";
import endPoints from "@/modules/authorization/services/endPoints";
import {
  AuthorizationData,
  RegistrationData,
  // LoginResponse,
  // RegistrationResponse,
} from "@/modules/authorization/services/types";

export async function login(data: AuthorizationData) {
  return $api.post(endPoints.login, data);
}

export async function registration(data: RegistrationData) {
  return $api.post(endPoints.registration, data);
}

export async function checkUser() {
  return $api.get(endPoints.checkUser);
}