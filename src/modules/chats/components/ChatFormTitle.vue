<template>
  <div class="chat-form-title">
    <div class="back">
      <IconButton @click="backToChats">
        <img src="@/modules/UI-kit/images/back-icon.svg" alt="arrow" />
        <CustomText color="black" :font-weight="600" font-size="14px">
          Назад
        </CustomText>
      </IconButton>
    </div>
    <div class="center">
      <CustomText :font-weight="600" font-size="14px" color="var(--black)">
        Nikita Kucenko
      </CustomText>
      <CustomText color="var(--text-subtext)" font-size="14px" :font-weight="600">
        Frontend
      </CustomText>
    </div>
    <div class="right">
      <img src="@/modules/chats/images/icons/user.png" alt="profile-icon" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import IconButton from "@/modules/UI-kit/components/IconButton.vue";
import CustomText from "@/modules/UI-kit/components/CustomText.vue";

const router = useRouter();

const backToChats = async () => {
  await router.push({ path: "/chats" });
};
</script>

<style scoped lang="scss">
.chat-form-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
  border-bottom: 1px solid var(--background-tertiary);
}

.center {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.right {
  img {
    width: 32px;
    height: 32px;
  }
}
</style>
