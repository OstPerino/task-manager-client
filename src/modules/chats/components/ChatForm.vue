<template>
  <div class="chat-form">
    <ChatFormTitle />
    <ChatStore />
    <SendMessageForm @update:add-message="onNewMessageHandler" />
  </div>
</template>

<script setup lang="ts">
import { io } from "socket.io-client";
import { useRoute } from "vue-router";
import { IMessage } from "@/modules/chats/types/types";
import { SOCKET_URL } from "@/api/sockets";
import { useChatsStore } from "@/modules/chats/store/chats";
import { onMounted, onBeforeUnmount } from "vue";
import ChatFormTitle from "@/modules/chats/components/ChatFormTitle.vue";
import ChatStore from "@/modules/chats/components/ChatStore.vue";
import SendMessageForm from "@/modules/chats/components/SendMessageForm.vue";
import { useAuthStore } from "@/modules/authorization/store/auth";

const socket = io(SOCKET_URL);
const chats = useChatsStore();
const user = useAuthStore();
const route = useRoute();

const onNewMessageHandler = (newMessage: IMessage) => {
  try {
    const receiverId =
      user.userId === chats?.currentChat?.firstUserId
        ? chats?.currentChat?.secondUserId
        : chats?.currentChat?.firstUserId;

    const messageObject = { ...newMessage, chatId: route.params.id, receiverId: receiverId }

    socket.emit("newMessage", messageObject);
    chats.addMessage(messageObject);
  } catch (e) {
    console.log(e);
  }
};

onMounted(() => {
  socket.on("connect", () => {
    console.log("connect is successfully");
  });

  socket.on("onMessage", (...args: any) => {
    console.log(args);
    // chats.addMessage(args.content);
  });
});

onBeforeUnmount(() => {
  socket.disconnect();
  socket.on("disconnect", () => {
    console.log("disconnected");
  });
});
</script>

<style scoped lang="scss">
.chat-form {
  background-color: var(--white);
  width: 628px;
  min-height: 732px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 12px;
}

.send-message {
  width: 100%;
}
</style>