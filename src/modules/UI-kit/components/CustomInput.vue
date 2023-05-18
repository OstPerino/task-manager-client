<template>
  <div class="custom-input-container">
    <label for="input" class="label" :class="{ active: modelValue }">
      {{ labelContent }}
    </label>
    <input
      class="input"
      :type="type"
      :value="modelValue"
      @input="onInputHandler"
      :readonly="readonly"
      :class="{ 'has-value': modelValue }"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/runtime-core";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  labelContent: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
    default: "text",
  },
  readonly: {
    type: Boolean,
    required: false,
    default: false,
  },
});

// const input = ref<string>(props.modelValue);

const onInputHandler = (event: InputEvent) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};
</script>

<style scoped lang="scss">
.custom-input-container {
  position: relative;

  .input {
    border: none;
    font-size: 14px;
    padding: 13px 12px;
    border-radius: 8px;
    width: 100%;
    outline: none;
    background-color: var(--background-secondary);
    color: var(--text-tertiary);

    &:focus ~ .label {
      top: -18px;
      font-size: 12px;
    }
  }

  .label {
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
    transition: all 0.2s ease;
    color: var(--text-tertiary);
    font-size: 17px;

    &.active {
      top: -14px;
      font-size: 12px;
      //color: #6d9bf1;
    }
  }
}
</style>
