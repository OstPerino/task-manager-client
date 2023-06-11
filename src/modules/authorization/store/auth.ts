import { defineStore } from "pinia";
import { checkUser } from "@/modules/authorization/services/authorization.service";
import {Nullable} from "@/types";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      token: "",
      email: "",
      firstName: "",
      lastName: "",
      userId: null as Nullable<number>
    };
  },
  actions: {
    setAuthState(payload: any) {
      this.token = localStorage.getItem('token') || "";
      this.email = payload.email;
      this.firstName = payload.firstName;
      this.lastName = payload.lastName;
      this.userId = payload.id;
    },
    clearAuthState() {
      this.token = "";
      this.email = "";
      this.firstName = "";
      this.lastName = "";
      localStorage.removeItem("token");
    },
    async checkUserState() {
      try {
        const response = await checkUser();
        console.log(response)
        this.setAuthState(response.data);
        return response.data;
      } catch (e: any) {
        return e;
      }
    },
  },
});
