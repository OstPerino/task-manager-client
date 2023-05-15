<template>
  <div class="kanban-title">
    <div class="title-container" v-for="title in titles">
      <KanbanTitleStatus :content="title" class="title" />
      <KanbanTaskCounter class="counter" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTasksStore } from "@/modules/tasks/store/tasks";
import KanbanTitleStatus from "@/modules/tasks/components/KanbanTitleStatus.vue";
import KanbanTaskCounter from "@/modules/tasks/components/KanbanTaskCounter.vue";

const store = useTasksStore();

const titles = ["Не активные", "В работе", "Готовые"];
</script>

<style scoped lang="scss">
.kanban-title {
  display: flex;
  gap: 1rem;

  .title-container {
    width: 240px;
    display: flex;

    .counter {
      margin-left: 1rem;
    }
  }
}
</style>
