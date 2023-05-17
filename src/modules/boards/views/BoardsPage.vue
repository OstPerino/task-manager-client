<template>
  <div class="boards-page">
    <TableTitle
      :title="projects.currentProject?.name"
      :push-back="pushBack"
      :description="projects.currentProject?.description"
      :create-type="Modals.createBoard"
      class="title"
    />
    <BoardsGrid :boards="store.boards" />
  </div>
</template>

<script setup lang="ts">
import { useBoardsStore } from "@/modules/boards/store/boards";
import {useRoute, useRouter} from "vue-router";
import BoardsGrid from "@/modules/boards/components/BoardsGrid.vue";
import { onMounted } from "vue";
import TableTitle from "@/modules/UI-kit/components/TableTitle.vue";
import { useProjectsStore } from "@/modules/projects/store/projects";
import {Modals} from "@/modules/layouts/types/modal.enum";

const store = useBoardsStore();
const projects = useProjectsStore();
const route = useRoute();
const router = useRouter();

const pushBack = async () => {
  await router.push({ path: "/main" })
};

onMounted(async () => {
  await store.setBoards({ projectId: route.params.id });
  await projects.setCurrentProject(+route.params.id);
});
</script>

<style scoped lang="scss">
.title {
  margin-bottom: 1rem;
}
</style>
