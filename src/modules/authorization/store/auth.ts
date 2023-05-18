import { defineStore } from "pinia";
import { checkUser } from "@/modules/authorization/services/authorization.service";

interface AuthState {
  token: string;
  email: string;
  firstName: string;
  lastName: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      token: "",
      email: "",
      firstName: "",
      lastName: "",
    };
  },
  actions: {
    setAuthState(payload: any) {
      this.token = payload.token;
      // this.email = payload.email;
      // this.firstName = payload.firstName;
      // this.lastName = payload.lastName;
    },
    clearAuthState() {
      this.token = "";
      // this.email = "";
      // this.firstName = "";
      // this.lastName = "";
      localStorage.removeItem("token");
    },
    async checkUserState() {
      try {
        const response = await checkUser();
        this.setAuthState(response.data);
        return response.data;
      } catch (e: any) {
        return e;
      }
    },
  },
});
