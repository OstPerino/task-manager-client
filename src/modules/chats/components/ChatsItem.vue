<template>
  <div class="chats-item" @click="onCLickHandler">
    <div class="left-chat-content">
      <div class="user-image">
        <img src="@/modules/chats/images/icons/user.png" alt="profile-icon" />
      </div>
      <div class="right-container">
        <div class="content">
          <CustomText :font-weight="600" font-size="14px" color="var(--black)" class="top">
            Никита Куценко
          </CustomText>
          <CustomText
              :font-weight="600"
              font-size="14px"
              color="var(--text-subtext)"
          >
            Отлично, жду выполнения задачи
          </CustomText>
        </div>
        <div class="last-date">
          <CustomText color="var(--text-subtext)" :font-weight="600" font-size="14px">
            19 НОЯ
          </CustomText>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CustomText from "@/modules/UI-kit/components/CustomText.vue";

const emit = defineEmits(['click']);

const props = defineProps({
  chat: {
    type: Object,
    required: true
  }
});

const onCLickHandler = () => {
  emit('click', props.chat.id);
}
</script>

<style scoped lang="scss">
.chats-item {
  cursor: pointer;
  padding: 12px 1.5rem 12px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--background-tertiary);

  &:last-child {
    border-bottom: none;
  }
}

.left-chat-content {
  display: flex;
  width: 100%;
}

.user-image {
  margin-left: 24px;
  margin-right: 15px;

  img {
    max-width: 48px;
    max-height: 48px;
  }
}

.content {
  display: flex;
  flex-direction: column;
}

.top {
  margin-bottom: 9px;
}

.right-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
