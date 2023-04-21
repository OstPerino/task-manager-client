<template>
  <ul>
    <ProjectsCard v-for="project in projects" :project="project" />
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
</script>

<style scoped></style>
