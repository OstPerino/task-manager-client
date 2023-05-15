<template>
  <div class="board-page">
    <TableTitle
      :title="boards.currentBoard?.name"
      :push-back="pushBack"
      :description="boards.currentBoard?.description"
      class="title"
    />
    <KanbanList />
  </div>
</template>

<script setup lang="ts">
import { useTasksStore } from "@/modules/tasks/store/tasks";
import { onMounted } from "vue";
import KanbanList from "@/modules/tasks/components/KanbanList.vue";
import TableTitle from "@/modules/UI-kit/components/TableTitle.vue";
import {useRoute} from "vue-router";
import {useBoardsStore} from "@/modules/boards/store/boards";

const tasks = useTasksStore();
const boards = useBoardsStore();
const route = useRoute();

const pushBack = () => {};

onMounted(async () => {
  await tasks.setTasks(+route.params.id);
  await boards.setCurrentBoard(+route.params.id);
});
</script>

<style scoped>
.board-page {
  height: calc(100% - 44px);

  .title {
    margin-bottom: 1rem;
  }
}
</style>
