<template>
  <div class="column">
    <draggable
      :list="cards"
      group="tasks"
      class="kanban-column"
      @change="onDrag"
      :move="onChange"
      item-key="id"
    >
      <template #item="{ element: card }">
        <KanbanTaskCard :card="card" />
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { Task } from "@/modules/tasks/types/types";
import KanbanTaskCard from "@/modules/tasks/components/KanbanTaskCard.vue";

const emit = defineEmits(["dragged"]);

const props = defineProps({
  cards: {
    type: Array as PropType<Task[]>,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const onDrag = (event) => {
  console.log(event)
  emit("dragged", event);
};

const onChange = (event) => {
  // console.log(event);
};
</script>

<style scoped lang="scss">
.column {
  height: 100%;
  width: 240px;

  .kanban-column {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}
</style>