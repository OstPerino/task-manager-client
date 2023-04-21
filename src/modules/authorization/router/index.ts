import AuthorizationPage from "@/modules/authorization/views/AuthorizationPage.vue";
import RegistrationPage from "@/modules/authorization/views/RegistrationPage.vue";

export default [
  {
    name: "Authorization",
    component: AuthorizationPage,
    path: "/auth",
  },
  {
    name: "Registration",
    component: RegistrationPage,
    path: "/registration",
  },
];
