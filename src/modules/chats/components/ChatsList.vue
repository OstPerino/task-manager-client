<template>
  <div class="chats-list">
    <ScrollChooseUser />
    <ChatsItem v-for="chat in chats" :key="chat.id" :chat="chat" />
  </div>
</template>

<script setup lang="ts">
import ChatsItem from "@/modules/chats/components/ChatsItem.vue";
import { ref } from "@vue/runtime-core";
import ScrollChooseUser from "@/modules/chats/components/ScrollChooseUser.vue";

const chats = ref([
  {
    id: 1,
    name: "Nikita",
    surname: "Kucenko",
    messages: [
      {
        senderId: 3,
        receiverId: 2,
        text: "Отлично, жду выполнения задачи",
      },
      {
        senderId: 4,
        receiverId: 5,
        text: "Отлично, жду выполнения задачи",
      },
      {
        senderId: 6,
        receiverId: 7,
        text: "Отлично, жду выполнения задачи",
      },
    ],
  },
  {
    id: 2,
    name: "Nikita",
    surname: "Kucenko",
    messages: [
      {
        senderId: 3,
        receiverId: 2,
        text: "Отлично, жду выполнения задачи",
      },
      {
        senderId: 4,
        receiverId: 5,
        text: "Отлично, жду выполнения задачи",
      },
      {
        senderId: 6,
        receiverId: 7,
        text: "Отлично, жду выполнения задачи",
      },
    ],
  },
  {
    id: 3,
    name: "Nikita",
    surname: "Kucenko",
    messages: [
      {
        senderId: 3,
        receiverId: 2,
        text: "Отлично, жду выполнения задачи",
      },
      {
        senderId: 4,
        receiverId: 5,
        text: "Отлично, жду выполнения задачи",
      },
      {
        senderId: 6,
        receiverId: 7,
        text: "Отлично, жду выполнения задачи",
      },
    ],
  },
  {
    id: 4,
    name: "Nikita",
    surname: "Kucenko",
    messages: [
      {
        senderId: 3,
        receiverId: 2,
        text: "Отлично, жду выполнения задачи",
      },
      {
        senderId: 4,
        receiverId: 5,
        text: "Отлично, жду выполнения задачи",
      },
      {
        senderId: 6,
        receiverId: 7,
        text: "Отлично, жду выполнения задачи",
      },
    ],
  },
  {
    id: 5,
    name: "Nikita",
    surname: "Kucenko",
    messages: [
      {
        senderId: 3,
        receiverId: 2,
        text: "Отлично, жду выполнения задачи",
      },
      {
        senderId: 4,
        receiverId: 5,
        text: "Отлично, жду выполнения задачи",
      },
      {
        senderId: 6,
        receiverId: 7,
        text: "Отлично, жду выполнения задачи",
      },
    ],
  },
  {
    id: 6,
    name: "Nikita",
    surname: "Kucenko",
    messages: [
      {
        senderId: 3,
        receiverId: 2,
        text: "Отлично, жду выполнения задачи",
      },
      {
        senderId: 4,
        receiverId: 5,
        text: "Отлично, жду выполнения задачи",
      },
      {
        senderId: 6,
        receiverId: 7,
        text: "Отлично, жду выполнения задачи",
      },
    ],
  },
]);
</script>

<style scoped lang="scss">
.chats-list {
  max-width: 628px;
  background-color: var(--white);
  padding: 12px 0;
  border-radius: 12px;
}
</style>
