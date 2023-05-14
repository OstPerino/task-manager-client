<template>
  <div class="chats-page">
    <CustomButton @click="sendMessage">
      Click me
    </CustomButton>
  </div>
</template>

<script setup lang="ts">
import {io} from "socket.io-client";
import {onDeactivated, onMounted} from "vue";
import CustomButton from "@/modules/UI-kit/components/CustomButton.vue";
import {ref} from "@vue/runtime-core";

const socket = io('http://localhost:3000/');
const messages = ref<any>([]);

const sendMessage = () => {
  socket.emit('newMessage', 'message');
}

onMounted(() => {
  socket.on('connect', () => {
    console.log('connect is successfully');
  })
})

onDeactivated(() => {
  socket.on('disconnect', () => {
    console.log('disconnected');
  })
})
</script>

<style scoped>

</style>