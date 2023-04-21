<template>
  <span
    class="custom-text"
    :style="{ fontWeight: fontWeight, fontSize: fontSize, color: color }"
  >
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
const props = defineProps({
  fontWeight: {
    type: String,
    required: false,
    default: 400,
  },
  fontSize: {
    type: String,
    required: false,
    default: "16px",
  },
  color: {
    type: String,
    required: false,
    default: "black",
  },
});
</script>

<style scoped lang="scss"></style>
