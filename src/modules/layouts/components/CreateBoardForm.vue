<template>
  <div class="create-board-form">
    <CustomInput
      v-model="formState.name"
      label-content="Название доски"
      class="input"
    />
    <CustomInput
      v-model="formState.description"
      label-content="Описание"
      class="input"
    />
    <CustomInput
      v-model="formState.githubURL"
      label-content="Введите ссылку на репозиторий"
      class="input"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive, watch } from "vue";
import CustomInput from "@/modules/UI-kit/components/CustomInput.vue";

const emit = defineEmits(["update:formState"]);

const formState = reactive({
  name: "",
  description: "",
  githubURL: "",
});

watch(
  () => {
    return { ...formState };
  },
  () => {
    emit("update:formState", formState);
  }
);
</script>

<style scoped lang="scss">
.create-board-form {
  margin-top: 2.5rem;
}

.input {
  margin-top: 1.5rem;

  &:first-child {
    margin-top: 0;
  }
}
</style>
