<template>
  <div class="chats-actions-bar">
    <ul class="actions">
      <li class="action">
        <IconButton class="action-button" @click="createChatFunc">
          <CustomText font-size="18px" :font-weight="400" color="var(--black)">
            Создать чат
          </CustomText>
        </IconButton>
      </li>
      <li class="action">
        <IconButton class="action-button">
          <CustomText font-size="18px" :font-weight="400" color="var(--black)">
            Написать сообщение
          </CustomText>
        </IconButton>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { Modals } from "@/modules/layouts/types/modal.enum";
import { useModalStore } from "@/modules/layouts/store/modal";
import IconButton from "@/modules/UI-kit/components/IconButton.vue";
import CustomText from "@/modules/UI-kit/components/CustomText.vue";

const modal = useModalStore();

const createChatFunc = () => {
  modal.setCurrentModal(Modals.createChat);
};
</script>

<style scoped lang="scss">
.chats-actions-bar {
  background-color: var(--white);
  margin-left: 1.5rem;
  height: auto;
  max-height: 108px;
  border-radius: 12px;
}

.action {
  padding: 1rem;
  border-bottom: 1px solid var(--background-tertiary);
}
</style>
