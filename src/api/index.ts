import axios, { InternalAxiosRequestConfig } from "axios";

const SERVER_URL = `http://${process.env.VUE_APP_API_DOMAIN}:${process.env.VUE_APP_API_PORT}/api`;
const MOCK_URL = `http://${process.env.VUE_APP_MOCK_DOMAIN}:${process.env.VUE_APP_MOCK_PORT}/api`;

const $api = axios.create({
  baseURL: SERVER_URL,
  // withCredentials: true,
});

$api.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    if (localStorage.getItem("token")) {
      config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    }

    return config;
  }
);

export default $api;
