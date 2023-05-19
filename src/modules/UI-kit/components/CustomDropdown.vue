<template>
  <div class="dropdown">
    <button @click="toggleDropdown">{{ selectedOption?.label }}</button>
    <ul v-show="state.isDropdownOpen">
      <li
          v-for="option in options"
          :key="option?.id"
          @click="onChangeHandler(option)"
      >
        {{ option?.label }}
      </li>
    </ul>

  </div>
</template>

<script setup lang="ts">

import {PropType, reactive} from "vue";

const emit = defineEmits(['update:selectedOption']);

const props = defineProps({
  options: {
    type: Array as PropType<Array<any>>,
    required: true
  },
  selectedOption: {
    type: Object as PropType<any>,
    required: true,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  }
});

const state = reactive({
  isDropdownOpen: false
});

const toggleDropdown = () => {
  if (!props.isDisabled) {
    state.isDropdownOpen = !state.isDropdownOpen;
  }
}

const onChangeHandler = (option: any) => {
  emit("update:selectedOption", option);
  state.isDropdownOpen = false;
}
</script>

<style scoped lang="scss">
.dropdown {
  position: relative;
  display: inline-block;
  width: 100%;
  background-color: var(--background-secondary);
  color: var(--text-tertiary);
  padding: 13px 12px;
  outline: none;
  font-size: 17px;
}

.dropdown button {
  background-color: var(--background-secondary);
  color: var(--text-tertiary);
  width: 100%;
  font-size: 17px;
  position: relative;
  //border: 1px solid #a5a5a5;
  border: none;
  border-radius: 4px;
  padding-right: 30px;
  min-width: 200px;
  text-align: left;
  font-weight: 500;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
}

.dropdown button:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(0, 99, 255, 0.2);
}

.dropdown button:before {
  content: "";
  position: absolute;
  top: 50%;
  right: 10px;
  width: 0;
  height: 0;
  margin-top: -3px;
  border-top: 6px solid #999;
  border-right: 6px solid transparent;
  border-left: 6px solid transparent;
  pointer-events: none;
}

.dropdown ul {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 999;
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: #fff;
  //border: 1px solid #a5a5a5;
  border-top: none;
  //box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
}

.dropdown li {
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 400;
  background-color: var(--background-secondary);
  color: var(--text-tertiary);
  padding: 13px 12px;
}

.dropdown li:hover {
  background-color: #eee;
}

.dropdown li.selected {
  background-color: var(--background-secondary);
  color: var(--text-tertiary);
}

.dropdown li.disabled {
  color: #c7c7c7;
  cursor: default;
}

.dropdown li.divider {
  height: 1px;
  margin: 5px 0;
  background-color: #a5a5a5;
}
</style>