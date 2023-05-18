<template>
  <div class="chat-form">
    <ChatFormTitle/>
    <ChatStore/>
    <SendMessageForm/>
  </div>
</template>

<script setup lang="ts">
import ChatFormTitle from "@/modules/chats/components/ChatFormTitle.vue";
import ChatStore from "@/modules/chats/components/ChatStore.vue";
import SendMessageForm from "@/modules/chats/components/SendMessageForm.vue";
</script>

<style scoped lang="scss">
.chat-form {
  background-color: var(--white);
  width: 628px;
  min-height: 732px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.send-message {
  width: 100%;
}
</style>