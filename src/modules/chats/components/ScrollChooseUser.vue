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
import UserChatCircle from "@/modules/chats/components/UserChatCircle.vue";
import { ref } from "@vue/runtime-core";

const users = ref([
  {
    id: 1,
    name: "Никита",
  },
  {
    id: 2,
    name: "Никита",
  },
  {
    id: 3,
    name: "Никита",
  },
  {
    id: 4,
    name: "Никита",
  },
  {
    id: 5,
    name: "Никита",
  },
  {
    id: 5,
    name: "Никита",
  },
  {
    id: 5,
    name: "Никита",
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
