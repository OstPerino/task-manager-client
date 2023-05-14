<template>
  <ul class="projects-list">
    <div class="list-title">
      <CustomText :font-weight="700">
        Проекты
      </CustomText>
    </div>
    <ProjectsItem
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
import ProjectsItem from "@/modules/projects/components/ProjectsItem.vue";
import CustomText from "@/modules/UI-kit/components/CustomText.vue";

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
.projects-list {
  background-color: var(--white);
  padding: 24px 16px;
  border-radius: 12px;
  margin-right: 2rem;
}

.list-title {
  margin-bottom: 24px;
}
</style>
