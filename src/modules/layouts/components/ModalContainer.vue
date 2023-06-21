<template>
  <div class="modal-container">
    <div class="top">
      <div class="header">
        <CustomText :font-weight="700" font-size="17px" color="var(--black)">
          <slot name="header"></slot>
        </CustomText>
        <IconButton @click="closeModalContainer">
          <!--    TODO: Doesn't work      -->
          <font-awesome-icon :icon="['fas', 'xmark']" />
        </IconButton>
      </div>
      <div class="main-modal-content">
        <slot name="main"></slot>
      </div>
    </div>
    <div class="complete">
      <slot name="complete"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconButton from "@/modules/UI-kit/components/IconButton.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import CustomText from "@/modules/UI-kit/components/CustomText.vue";
import {useModalStore} from "@/modules/layouts/store/modal";

const modals = useModalStore();

const closeModalContainer = () => {
  modals.closeModal();
}
</script>

<style scoped lang="scss">
.modal-container {
  min-width: 700px;
  min-height: 500px;
  background-color: var(--white);
  padding: 1.5rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.header {
  display: flex;
  justify-content: space-between;
}
</style>
