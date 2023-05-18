<template>
  <div class="chat-page">
    <ChatForm/>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import ChatForm from "@/modules/chats/components/ChatForm.vue";

const route = useRoute();

// TODO: Fetch data for chat and give to lvl lower
</script>

<style scoped lang="scss">
.chat-page {

}
</style>
