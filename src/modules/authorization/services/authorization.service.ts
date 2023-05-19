import $api from "@/api";
import endPoints from "@/modules/authorization/services/authorization.end-points";
import {
  AuthorizationData,
  RegistrationData, User,
} from "@/modules/authorization/services/types";
import {AxiosResponse} from "axios";

export async function login(data: AuthorizationData) {
  return $api.post(endPoints.login, data);
}

export async function registration(data: RegistrationData) {
  return $api.post(endPoints.registration, data);
}

export async function checkUser() {
  return $api.get(endPoints.checkUser);
}

export async function getUsers() {
  return $api.get(endPoints.users);
}

export async function getUserInfo(id: string | number): Promise<User> {
  const response = await $api.get(`${endPoints.users}/${id}`);
  return response.data;
}