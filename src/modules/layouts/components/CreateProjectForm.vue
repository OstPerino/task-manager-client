<template>
  <div class="create-project-form">
    <CustomInput
      v-model="formState.name"
      label-content="Название проекта"
      class="input"
    />
    <CustomInput
      v-model="formState.description"
      label-content="Описание"
      class="input"
    />
    <CustomInput
      v-model="formState.email"
      label-content="Ваш email"
      class="input"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive, watch } from "vue";
import CustomInput from "@/modules/UI-kit/components/CustomInput.vue";

const emit = defineEmits(["update:formState"]);

const formState = reactive({
  email: "",
  name: "",
  description: "",
});

watch(() => { return { ...formState }}, () => {
  emit('update:formState', formState);
})
</script>

<style scoped lang="scss">
.create-project-form {
  margin-top: 2.5rem;
}

.input {
  margin-top: 1.5rem;

  &:first-child {
    margin-top: 0;
  }
}
</style>
