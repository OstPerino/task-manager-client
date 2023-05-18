<template>
  <div class="chat-message">
    <div class="user-image">
      <img src="@/modules/chats/images/icons/user.png" alt="profile-icon" />
    </div>
    <div class="content">
      <div class="top">
        <CustomText color="var(--black)" :font-weight="700">
          {{ message.senderName }}
        </CustomText>
        <CustomText
          color="var(--middle-gray)"
          :font-weight="400"
          font-size="12px"
          class="time"
        >
          {{ message.time }}
        </CustomText>
      </div>
      <CustomText>
        {{ message.text }}
      </CustomText>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IMessage } from "@/modules/chats/types/types";
import CustomText from "@/modules/UI-kit/components/CustomText.vue";
import { PropType } from "vue";

const props = defineProps({
  message: {
    type: Object as PropType<IMessage>,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.chat-message {
  display: flex;
  margin: 1rem 0 1.5rem 0;
  overflow-y: scroll;
  padding: 0 1rem;
}

.user-image {
  margin-right: 12px;

  img {
    width: 36px;
    height: 36px;
  }
}

.content {
  display: flex;
  flex-direction: column;
}

.top {
}

.time {
  margin-left: 0.5rem;
}
</style>
