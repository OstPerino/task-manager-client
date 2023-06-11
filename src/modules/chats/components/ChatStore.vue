<template>
  <div class="chat-store">
    <ChatMessage
      v-for="message in chats.messages"
      :message="message"
    />
  </div>
</template>

<script setup lang="ts">
import ChatMessage from "@/modules/chats/components/ChatMessage.vue";
import { useChatsStore } from "@/modules/chats/store/chats";
import {onMounted} from "vue";
import {useRoute} from "vue-router";

const chats = useChatsStore();
const route = useRoute();

onMounted(async () => {
  await chats.setMessages(+route.params.id);
})
</script>

<style scoped lang="scss">
.chat-store {
  height: 100%;
  width: 100%;
  margin-bottom: auto;
}
</style>
