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
import { Project } from "@/modules/projects/services/types";
import { PropType } from "vue";
import ProjectsCard from "@/modules/projects/components/ProjectsCard.vue";

const props = defineProps({
  projects: {
    type: Array as PropType<Project[]>,
    required: true,
  },
});

const onClickHandler = () => {
  console.log('Route to project page')
}
</script>

<style scoped lang="scss">
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, max-content);
  gap: 1rem;
}
</style>
