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
    <CustomDropdown
      :selected-option="currentOption"
      :options="options"
      class="input"
      @update:selected-option="updateOption"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/runtime-core";
import { onMounted, reactive, watch } from "vue";
import { getBranches } from "@/api/github.services";
import { useBoardsStore } from "@/modules/boards/store/boards";
import CustomInput from "@/modules/UI-kit/components/CustomInput.vue";
import CustomDropdown from "@/modules/UI-kit/components/CustomDropdown.vue";

const boards = useBoardsStore();

const emit = defineEmits(["update:formState"]);

const options = ref([]);
const currentOption = reactive({ name: "Не выбрано" });

const formState = reactive({
  title: "",
  description: "",
  branchName: ""
});

const updateOption = (option: any) => {
  currentOption.name = option.name;
  formState.branchName = option.name;
}

watch(
  () => {
    return { ...formState };
  },
  () => {
    emit("update:formState", formState);
  }
);

onMounted(async () => {
  try {
    console.log(boards?.currentBoard?.githubURL);
    const response = await getBranches(boards?.currentBoard?.githubURL);
    console.log(response);
    options.value = response?.data;
  } catch (e) {
    console.log(e);
  }
});
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
