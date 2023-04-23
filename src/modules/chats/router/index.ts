import ChatPage from "@/modules/chats/views/ChatsPage.vue";

export default [
  {
    name: "ChatPage",
    component: ChatPage,
    path: "/chats",
    meta: { requires: true },
  }
]