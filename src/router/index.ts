import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import { useAuthStore } from "@/modules/authorization/store/auth";
import authorizationModule from "@/modules/authorization/router/index";
import mainPageModule from "@/modules/projects/router/index";
import chatsModule from "@/modules/chats/router/index";
import boardsModule from "@/modules/boards/router/index";

const routes: Array<RouteRecordRaw> = [
  ...authorizationModule,
  ...mainPageModule,
  ...chatsModule,
  ...boardsModule,
  { path: "/:catchAll(.*)", redirect: "/auth" },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const { requires } = to.meta;
  const token = localStorage.getItem("token");
  const store = useAuthStore();

  if (token && !store.token) {
    await store.checkUserState();
  }

  if (requires && !token) {
    next({ path: "/auth" });
  }

  next();
});

export default router;
