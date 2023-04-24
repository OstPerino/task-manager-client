<template>
  <ul class="projects-grid">
    <ProjectsCard
      v-for="project in projects"
      :project="project"
      @click="onClickHandler"
    />
  </ul>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { Project } from "@/modules/projects/services/types";
import { PropType } from "vue";
import ProjectsCard from "@/modules/projects/components/ProjectsCard.vue";
import axios from "axios";

const router = useRouter();

const props = defineProps({
  projects: {
    type: Array as PropType<Project[]>,
    required: true,
  },
});

const onClickHandler = async (projectId: number) => {
  await router.push({ path: `/main/${projectId}/boards` });
};
</script>

<style scoped lang="scss">
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, max-content);
  gap: 1rem;
}
</style>
