<template>
  <ul class="boards-grid">
    <BoardsCard
      v-for="board in boards"
      :board="board"
      @click="onClickHandler"
    />
  </ul>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Board } from "@/modules/boards/types/types";
import BoardsCard from "@/modules/boards/components/BoardsCard.vue";

const router = useRouter();
const route = useRoute();

const props = defineProps({
  boards: {
    type: Array as PropType<Board[]>,
    required: true,
  },
});

const onClickHandler = async (boardsId: number) => {
  await router.push({ path: `/main/${route.params.id}/boards/${boardsId}` });
};
</script>

<style scoped lang="scss">
.boards-grid {
  display: grid;
  grid-template-columns: repeat(3, max-content);
  gap: 1rem;
}
</style>
