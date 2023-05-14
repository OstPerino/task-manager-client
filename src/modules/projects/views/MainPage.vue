<template>
  <div class="main-page">
<!--    <ProjectsGrid :projects="store.projects" />-->
    <ProjectsList :projects="store.projects"/>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useProjectsStore } from "@/modules/projects/store/projects";
import ProjectsGrid from "@/modules/projects/components/ProjectsGrid.vue";
import ProjectsList from "@/modules/projects/components/ProjectsList.vue";

const router = useRouter();
const store = useProjectsStore();

const pushBack = () => {

}

onMounted(async () => {
  await store.setProjects();
});
</script>

<style scoped lang="scss">
.main-page {
}
</style>
