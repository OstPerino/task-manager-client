<template>
  <div class="chat-page">
    <ChatForm />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted } from "vue";
import { useChatsStore } from "@/modules/chats/store/chats";
import ChatForm from "@/modules/chats/components/ChatForm.vue";

const route = useRoute();
const chats = useChatsStore();

onMounted(async () => {
  await chats.setMessages(+route.params.id);
  await chats.setCurrentChat(+route.params.id);
});
// TODO: Fetch data for chat and give to lvl lower
</script>

<style scoped lang="scss">
.chat-page {
}
</style>
