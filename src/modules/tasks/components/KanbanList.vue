<template>
  <div class="kanban-list">
    <KanbanTitle class="title" />
    <div class="list">
      <KanbanColumn
        :cards="store.notStarted"
        @dragged="onDrag"
        :status="'NOT_STARTED'"
      />
      <KanbanColumn
        :cards="store.active"
        @dragged="onDrag"
        :status="'ACTIVE'"
      />
      <KanbanColumn :cards="store.done" @dragged="onDrag" :status="'DONE'" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTasksStore } from "@/modules/tasks/store/tasks";
import { changeStatus } from "@/modules/tasks/services/tasks.service";
import KanbanColumn from "@/modules/tasks/components/KanbanColumn.vue";
import KanbanTitle from "@/modules/tasks/components/KanbanTitle.vue";

const store = useTasksStore();

const onDrag = async (event: any, status: string) => {
  if (event?.added) {
    try {
      await changeStatus(event?.added?.element?.id, status);
    } catch (e) {
      // TODO: Error handler
      console.log(e);
    }
  }
};
</script>

<style scoped lang="scss">
.kanban-list {
  height: calc(100% - 44px);

  .title {
    margin-bottom: 1rem;
  }

  .list {
    display: flex;
    gap: 1rem;
    height: calc(100% - 44px);
  }
}
</style>
