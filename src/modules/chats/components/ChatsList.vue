<template>
  <div class="chats-list">
    <ScrollChooseUser />
    <ChatsItem
      v-for="chat in chats?.chats"
      :chat="chat"
      @click="chatClickHandler"
    />
    <EmptyChats v-if="!chats.chats.length"/>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useChatsStore } from "@/modules/chats/store/chats";
import ChatsItem from "@/modules/chats/components/ChatsItem.vue";
import ScrollChooseUser from "@/modules/chats/components/ScrollChooseUser.vue";
import EmptyChats from "@/modules/chats/components/EmptyChats.vue";

const router = useRouter();
const chats = useChatsStore();

const chatClickHandler = async (chatId: number) => {
  await router.push({ path: `/chats/${chatId}` });
};
</script>

<style scoped lang="scss">
.chats-list {
  width: 628px;
  background-color: var(--white);
  padding: 12px 0;
  border-radius: 12px;
}
</style>
