<template>
  <div class="modal-wrapper">
    <ModalContainer>

    </ModalContainer>
  </div>
</template>

<script setup lang="ts">

import ModalContainer from "@/modules/layouts/components/ModalContainer.vue";
</script>

<style scoped lang="scss">
.modal-wrapper {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>