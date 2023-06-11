<template>
  <div class="send-message-form" @keydown.enter="sendMessage">
    <div class="left">
      <IconButton @click="loadFiles">
        <font-awesome-icon :icon="['fas', 'paperclip']" class="icon" />
      </IconButton>
    </div>
    <div class="center">
      <CustomInput v-model="messageText" :label-content="''" />
    </div>
    <div class="right">
      <IconButton @click="sendMessage">
        <span class="send-icon">
          <img src="@/modules/chats/images/icons/send.svg" alt="send" />
        </span>
      </IconButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconButton from "@/modules/UI-kit/components/IconButton.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import CustomInput from "@/modules/UI-kit/components/CustomInput.vue";
import { ref } from "@vue/runtime-core";
import {useChatsStore} from "@/modules/chats/store/chats";
import {IMessage} from "@/modules/chats/types/types";
import {useAuthStore} from "@/modules/authorization/store/auth";
import {onMounted} from "vue";

const emit = defineEmits(["update:addMessage"]);

const messageText = ref<string>("");

const chats = useChatsStore();
const user = useAuthStore();

const sendMessage = () => {
  const date = new Date();
  const time = `${date.getHours()}:${date.getMinutes()}`

  const newMessage: IMessage = {
    senderName: user.firstName,
    text: messageText.value,
    time: time,
  }

  emit('update:addMessage', newMessage);
  // chats.addMessage(newMessage);
  messageText.value = "";
}

// TODO: Loading of files
const loadFiles = () => {

}
</script>

<style scoped lang="scss">
.send-message-form {
  display: flex;
  align-items: center;
  width: 100%;
  border-top: 1px solid var(--background-tertiary);
  padding: 0.5rem 0;
}

.center {
  width: 100%;
}

.left {
  padding: 1rem;
}

.right {
  padding: 0 1rem;
}

.send-icon {
  background-color: var(--main-blue);
  padding: 10px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  width: 20px;
  height: 20px;
}
</style>
