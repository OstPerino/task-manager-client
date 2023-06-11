import ChatsPage from "@/modules/chats/views/ChatsPage.vue";
import ChatPage from "@/modules/chats/views/ChatPage.vue";

export default [
  {
    name: "ChatsPage",
    component: ChatsPage,
    path: "/chats",
    meta: { requires: true },
  },
  {
    name: "ChatPage",
    component: ChatPage,
    path: "/chats/:id",
    meta: { requires: true }
  }
];