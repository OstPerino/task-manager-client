<template>
  <div class="create-task-form">
    <CustomInput
      v-model="formState.title"
      label-content="Название задачи"
      class="input"
    />
    <CustomInput
      v-model="formState.description"
      label-content="Описание"
      class="input"
    />
  </div>
</template>

<script setup lang="ts">
import {reactive, watch} from "vue";
import CustomInput from "@/modules/UI-kit/components/CustomInput.vue";

const emit = defineEmits(['update:formState']);

const formState = reactive({
  title: "",
  description: "",
});

watch(() => { return { ...formState }}, () => {
  emit('update:formState', formState);
})
</script>

<style scoped lang="scss">
.create-task-form {
  margin-top: 2.5rem;
}

.input {
  margin-top: 1.5rem;

  &:first-child {
    margin-top: 0;
  }
}
</style>
