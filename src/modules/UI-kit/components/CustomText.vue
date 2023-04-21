<template>
  <span class="custom-text">
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
const props = defineProps({
  fontWeight: {
    type: Number,
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

<style scoped lang="scss">
.custom-text {
  font-weight: v-bind(fontWeight);
  font-size: v-bind(fontSize);
  color: v-bind(color);
}
</style>
