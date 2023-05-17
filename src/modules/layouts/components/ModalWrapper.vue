<template>
  <div class="modal-wrapper">
    <ModalContainer>
      <template #header>{{ headerTextGenerate }}</template>
      <template #main>
        <CreateProjectFrom
          v-if="modal.currentModal === Modals.createProject"
          @update:form-state="updateCreateProjectFormState"
        />
        <CreateBoardForm
          v-if="modal.currentModal === Modals.createBoard"
          @update:form-state="updateCreateBoardFormState"
        />
        <CreateTaskForm
          v-if="modal.currentModal === Modals.createTask"
          @update:form-state="updateCreateTaskFormState"
        />
      </template>
      <template #complete>
        <CustomButton :style="{ width: '200px' }" @click="create">
          <CustomText :font-weight="600" font-size="16px" color="var(--white)">
            {{ buttonTextGenerate }}
          </CustomText>
        </CustomButton>
      </template>
    </ModalContainer>
  </div>
</template>

<script setup lang="ts">
import { Modals } from "@/modules/layouts/types/modal.enum";
import { useRoute } from "vue-router";
import { computed, reactive } from "vue";
import { useModalStore } from "@/modules/layouts/store/modal";
import { createProject } from "@/modules/projects/services/projects.service";
import { createBoard } from "@/modules/boards/services/boards.service";
import ModalContainer from "@/modules/layouts/components/ModalContainer.vue";
import CustomButton from "@/modules/UI-kit/components/CustomButton.vue";
import CustomText from "@/modules/UI-kit/components/CustomText.vue";
import CreateProjectFrom from "@/modules/layouts/components/CreateProjectForm.vue";
import CreateBoardForm from "@/modules/layouts/components/CreateBoardForm.vue";

const modal = useModalStore();
const route = useRoute();
const createProjectFormState = reactive({
  email: "",
  name: "",
  description: "",
});
const createBoardFormState = reactive({
  name: "",
  description: "",
  projectId: route.params.id,
});
const createTaskFormState = reactive({
  title: "",
  description: "",
  status: "",
  // boardId: 1,
  // creatorId: 1,
  // workerId: 1
});

console.log(route.params);

const buttonTextGenerate = computed(() => {
  switch (modal.currentModal) {
    case Modals.createProject:
      return "Создать проект";

    case Modals.createBoard:
      return "Создать доску";

    case Modals.createTask:
      return "Создать задачу";

    default:
      return "Закрыть";
  }
});

const headerTextGenerate = computed(() => {
  switch (modal.currentModal) {
    case Modals.createProject:
      return "Проект";

    case Modals.createBoard:
      return "Доска";

    case Modals.createTask:
      return "Задача";

    default:
      return "Закрыть";
  }
});

const updateCreateProjectFormState = (formState: any) => {
  createProjectFormState.name = formState.name;
  createProjectFormState.email = formState.email;
  createProjectFormState.description = formState.description;
};

const updateCreateBoardFormState = (formState: any) => {
  createBoardFormState.name = formState.name;
  createBoardFormState.description = formState.description;
};

const updateCreateTaskFormState = (formState: any) => {
  createTaskFormState.title = formState.title;
  createTaskFormState.description = formState.description;
};

const createProjectFunc = async () => {
  try {
    const response = await createProject(createProjectFormState);
  } catch (e: any) {
    console.log(e.response);
  }
};

const createBoardFunc = async () => {
  try {
    const response = await createBoard(createBoardFormState);
    console.log(response);
  } catch (e) {}
};

const createTaskFunc = async () => {
  try {
  } catch (e) {}
};

const create = async () => {
  switch (modal.currentModal) {
    case Modals.createProject:
      await createProjectFunc();
      modal.closeModal();
      break;

    case Modals.createBoard:
      await createBoardFunc();
      modal.closeModal();
      break;

    case Modals.createTask:
      await createTaskFunc();
      modal.closeModal();
      break;

    default:
      return;
  }
};
</script>

<style scoped lang="scss">
.modal-wrapper {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
