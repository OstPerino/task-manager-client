<template>
  <div class="user-chat-circle" @click="onClickHandler">
    <img src="@/modules/chats/images/icons/user.png" alt="profile-icon" />
    <CustomText
      font-size="12px"
      :font-weight="400"
      color="var(--black)"
      class="name"
    >
      {{ name }}
    </CustomText>
  </div>
</template>

<script setup lang="ts">
import CustomText from "@/modules/UI-kit/components/CustomText.vue";

const emit = defineEmits(["click"]);

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  userId: {
    type: [Number, String],
    required: true,
  },
});

const onClickHandler = () => {
  emit("click");
};
</script>

<style scoped lang="scss">
.user-chat-circle {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  img {
    margin-bottom: 8px;
    width: 48px;
    height: 48px;
  }
}

.name {
  text-align: center;
}
</style>
