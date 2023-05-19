<template>
  <div class="scroll-choose-user">
    <UserChatCircle
      v-for="user in users"
      :key="user.id"
      :name="user.name"
      :user-id="user.id"
      class="user-circle"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/runtime-core";
import UserChatCircle from "@/modules/chats/components/UserChatCircle.vue";

const users = ref([
  {
    id: 1,
    name: "Никита",
  },
  {
    id: 2,
    name: "Александр",
  },
  {
    id: 3,
    name: "Алексей",
  },
  {
    id: 4,
    name: "Владимир",
  },
  {
    id: 5,
    name: "Степан",
  },
  {
    id: 5,
    name: "Николай",
  },
  {
    id: 5,
    name: "Василий",
  },
]);
</script>

<style scoped lang="scss">
.scroll-choose-user {
  display: flex;
  overflow: hidden;
  padding: 12px 8px;
  border-bottom: 2px solid var(--background-tertiary);
}

.user-circle {
  margin: 0 16px;
}
</style>
