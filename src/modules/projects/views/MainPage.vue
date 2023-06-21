<template>
  <div class="main-page">
    <ProjectsActionsBar class="title"/>
    <ProjectsList :projects="store.projects" />
    <EmptyProjects v-if="!store.projects.length"/>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useProjectsStore } from "@/modules/projects/store/projects";
import ProjectsGrid from "@/modules/projects/components/ProjectsGrid.vue";
import ProjectsList from "@/modules/projects/components/ProjectsList.vue";
import $api from "@/api";
import axios from "axios";
import ProjectsActionsBar from "@/modules/projects/components/ProjectsActionsBar.vue";
import EmptyProjects from "@/modules/projects/components/EmptyProjects.vue";

const router = useRouter();
const store = useProjectsStore();

const pushBack = () => {};

onMounted(async () => {
  await store.setProjects();
});
</script>

<style scoped lang="scss">
.main-page {
  width: 100%;
  height: 100%;
  padding-right: 1rem;
}

.title {
  margin-bottom: 1rem;
}
</style>
