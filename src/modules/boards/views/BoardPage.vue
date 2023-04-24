<template>
  <div class="board-page">
    <TableTitle
      title="Доска 1"
      :push-back="pushBack"
      description="Описание 1"
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

const store = useTasksStore();

const pushBack = () => {};

onMounted(async () => {
  await store.setTasks();
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
