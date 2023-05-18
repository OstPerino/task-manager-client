<template>
  <button class="btn" @click="onClickHandler">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits(['click']);

const onClickHandler = () => {
  emit('click');
}
</script>

<style scoped>
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>