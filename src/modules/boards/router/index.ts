import BoardsPage from "@/modules/boards/views/BoardsPage.vue";
import BoardPage from "@/modules/boards/views/BoardPage.vue";
import ChatPage from "@/modules/chats/views/ChatsPage.vue";

export default [
  {
    name: "BoardsPage",
    component: BoardsPage,
    path: "/main/:id/boards",
    meta: { requires: true },
  },
  {
    name: "BoardPage",
    component: BoardPage,
    path: "/main/:projectId/boards/:id",
    meta: { requires: true },
    // props: (route: any) => ({
    //   id: route.params.id,
    //   name: route.query.name,
    // }),
  },
];
