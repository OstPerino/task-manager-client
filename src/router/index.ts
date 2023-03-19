import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import authorizationModule from "@/modules/authorization/router/index";

const routes: Array<RouteRecordRaw> = [
    ...authorizationModule,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
