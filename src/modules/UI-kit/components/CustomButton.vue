<template>
  <button
    class="button"
    @click="onClickHandler"
    :class="classes"
    :disabled="isDisabled"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

const emit = defineEmits(["click"]);

const onClickHandler = () => {
  emit("click");
};

const props = defineProps({
  backgroundColor: {
    type: String,
    default: "var(--white)",
  },
  color: {
    type: String,
    default: "var(--black)",
  },
  className: {
    type: String,
    default: "defaultClass",
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
});

const classes = computed(() => {
  if (props.isDisabled) {
    return [props.className, "disabled"];
  }

  return [props.className];
});
</script>

<style scoped lang="scss">
.button {
  padding: 21px 16px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.defaultClass {
  color: white;
  background-color: black;
}

.disabled {
  background-color: var(--background-tertiary);
}
</style>
