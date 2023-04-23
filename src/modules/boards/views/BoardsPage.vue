<template>
  <div class="boards-page">
    <BoardsGrid :boards="store.boards"/>
  </div>
</template>

<script setup lang="ts">
import { useBoardsStore } from "@/modules/boards/store/boards";
import { useRoute } from "vue-router";
import BoardsGrid from "@/modules/boards/components/BoardsGrid.vue";
import {onMounted, watchEffect} from "vue";

const store = useBoardsStore();
const route = useRoute();

onMounted(async () => {
  await store.setBoards({ projectId: route.params.id });
})
</script>

<style scoped>

</style>