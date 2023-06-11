<template>
  <div class="chats-page">
    <ChatsList />
    <ChatsActionsBar />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useChatsStore } from "@/modules/chats/store/chats";
import ChatsList from "@/modules/chats/components/ChatsList.vue";
import ChatsActionsBar from "@/modules/chats/components/ChatsActionsBar.vue";

const chats = useChatsStore();

onMounted(async () => {
  await chats.setChats();
});
</script>

<style scoped lang="scss">
.chats-page {
  display: flex;
}
</style>
