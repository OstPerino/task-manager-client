<template>
  <div class="kanban-title">
    <div class="title-container">
      <KanbanTitleStatus content="Не активные" class="title" />
      <KanbanTaskCounter :content="String(store.notStarted.length)" class="counter" />
    </div>
    <div class="title-container">
      <KanbanTitleStatus content="В работе" class="title" />
      <KanbanTaskCounter :content="String(store.active.length)" class="counter" />
    </div>
    <div class="title-container">
      <KanbanTitleStatus content="Готовые" class="title" />
      <KanbanTaskCounter :content="String(store.done.length)" class="counter" />
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
