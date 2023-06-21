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
        <CreateChatForm
          v-if="modal.currentModal === Modals.createChat"
          @update:form-state="updateCreateChatFormState"
        />
        <InviteUserToProjectForm
          v-if="modal.currentModal === Modals.inviteUserToProject"
          @update:form-state="updateInviteUserToProject"
        />
        <InviteUserToBoardForm
          v-if="modal.currentModal === Modals.inviteUserToBoard"
        />
        <ViewInfoModal v-if="modal.currentModal === 'viewTask'" />
      </template>
      <template #complete>
        <CustomButton @click="create">
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
import { useTasksStore } from "@/modules/tasks/store/tasks";
import { useBoardsStore } from "@/modules/boards/store/boards";
import { useProjectsStore } from "@/modules/projects/store/projects";
import {
  createProject,
  inviteUserToProject,
} from "@/modules/projects/services/projects.service";
import { createBoard } from "@/modules/boards/services/boards.service";
import { TaskStatus } from "@/types/enums";
import { createTask } from "@/modules/tasks/services/tasks.service";
import { createChat } from "@/modules/chats/services/chats.services";
import ModalContainer from "@/modules/layouts/components/ModalContainer.vue";
import CustomButton from "@/modules/UI-kit/components/CustomButton.vue";
import CustomText from "@/modules/UI-kit/components/CustomText.vue";
import CreateProjectFrom from "@/modules/layouts/components/CreateProjectForm.vue";
import CreateBoardForm from "@/modules/layouts/components/CreateBoardForm.vue";
import CreateTaskForm from "@/modules/layouts/components/CreateTaskForm.vue";
import CreateChatForm from "@/modules/layouts/components/CreateChatForm.vue";
import InviteUserToProjectForm from "@/modules/layouts/components/InviteUserToProjectForm.vue";
import InviteUserToBoardForm from "@/modules/layouts/components/InviteUserToBoardForm.vue";
import { ref } from "@vue/runtime-core";
import { User } from "@/modules/authorization/services/types";
import { Nullable } from "@/types";
import ViewInfoModal from "@/modules/layouts/components/ViewInfoModal.vue";
import { useChatsStore } from "@/modules/chats/store/chats";
import { useAuthStore } from "@/modules/authorization/store/auth";

const modal = useModalStore();
const boards = useBoardsStore();
const projects = useProjectsStore();
const tasks = useTasksStore();
const route = useRoute();
const chats = useChatsStore();
const auth = useAuthStore();

const createProjectFormState = reactive({
  email: "",
  name: "",
  description: "",
});

const createBoardFormState = reactive({
  name: "",
  description: "",
  projectId: route.params.id,
  githubURL: "",
});

const createTaskFormState = reactive({
  title: "",
  description: "",
  status: TaskStatus.NOT_STARTED,
  boardId: route.params.id,
  creatorId: 1,
  workerId: 1,
  branchName: "",
});

const inviteUserToProjectFormState = ref<string>("");

const createChatFormState = ref<number>(0);

const buttonTextGenerate = computed(() => {
  switch (modal.currentModal) {
    case Modals.createProject:
      return "Создать проект";

    case Modals.createBoard:
      return "Создать доску";

    case Modals.createTask:
      return "Создать задачу";

    case Modals.createChat:
      return "Создать чат";

    case Modals.inviteUserToProject:
      return "Добавить пользователя";

    case Modals.inviteUserToBoard:
      return "Добавить пользователя";

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

    case Modals.createChat:
      return "Чат";

    case Modals.inviteUserToProject:
      return "Добавить пользователя на проект";

    case Modals.inviteUserToBoard:
      return "Добавить пользователя на доску";

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
  createBoardFormState.githubURL = formState.githubURL;
};

const updateCreateTaskFormState = (formState: any) => {
  createTaskFormState.title = formState.title;
  createTaskFormState.description = formState.description;
  createTaskFormState.branchName = formState.branchName;
};

const updateInviteUserToProject = (formState: any) => {
  inviteUserToProjectFormState.value = formState.value;
};

const updateCreateChatFormState = (formState: any) => {
  createChatFormState.value = formState;
};

const createProjectFunc = async () => {
  try {
    await createProject(createProjectFormState);
    await projects.setProjects();
  } catch (e: any) {
    // TODO: Добавить тосты по ошибкам
    console.log(e.response);
  }
};

const createBoardFunc = async () => {
  try {
    await createBoard(createBoardFormState);
    await boards.setBoards({ projectId: route.params.id });
  } catch (e) {
    // TODO: Добавить тосты по ошибкам
    console.log(e);
  }
};

const createTaskFunc = async () => {
  try {
    await createTask(createTaskFormState);
    await tasks.setTasks(+route.params.id);
  } catch (e) {
    // TODO: Добавить тосты по ошибкам
    console.log(e);
  }
};

const inviteUserToProjectFunc = async () => {
  try {
    const response = await inviteUserToProject(
      projects?.currentProject?.id,
      inviteUserToProjectFormState.value
    );
  } catch (e) {
    // TODO: Добавить тосты по ошибкам
    console.log(e);
  }
};

const createChatFunc = async () => {
  try {
    // console.log({ firstUserId: auth.userId, secondUserId: createChatFormState.value })
    await chats.createChat({
      firstUserId: auth.userId,
      secondUserId: createChatFormState.value,
    });
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

    case Modals.inviteUserToProject:
      await inviteUserToProjectFunc();
      modal.closeModal();
      break;

    case Modals.createChat:
      await createChatFunc();
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
