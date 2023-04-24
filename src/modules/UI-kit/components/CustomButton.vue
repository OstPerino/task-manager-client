<template>
  <button class="button" @click="onClickHandler">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits(["click"]);

const onClickHandler = () => {
  emit("click");
};
</script>

<style scoped lang="scss">
.button {
  padding: 10px 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
}
</style>
