<template>
  <li class="projects-item" @click="onClickHandler">
    <div class="main-projects-content">
      <ProjectsIcon />
      <div class="title">
        <CustomText class="title-text" :font-weight="600" font-size="14px">
          {{ project.name }}
        </CustomText>
        <CustomText class="title-subtitle" font-size="12px" :font-weight="400">
          {{ project.description }}
        </CustomText>
      </div>
      <div class="status">
        <ProjectsDots />
        <ProjectsStatus status="В работе" class="status-component" />
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { PropType } from "vue";
import { Project } from "@/modules/projects/services/types";
import CustomText from "@/modules/UI-kit/components/CustomText.vue";
import ProjectsIcon from "@/modules/projects/components/ProjectsIcon.vue";
import ProjectsStatus from "@/modules/projects/components/ProjectsStatus.vue";
import ProjectsDots from "@/modules/projects/components/ProjectsDots.vue";
import ProjectsProgress from "@/modules/projects/components/ProjectsProgress.vue";

const emit = defineEmits(["click"]);

const props = defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true,
  },
});

// const getCountOfBoards = computed(() => {
//   return props.project.boards.length;
// });

const onClickHandler = () => {
  emit("click", props.project.id);
};
</script>

<style scoped lang="scss">
.projects-item {
  border-bottom: 1px solid #dcdcdc;
  background-color: var(--white);
  padding: 1rem;
  cursor: pointer;
  border-radius: 24px;
  max-width: 480px;

  &:last-child {
    margin-bottom: 0;
  }
}

.main-projects-content {
  display: flex;
  //margin-bottom: 23px;
}

.title {
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
}

.title-text {
  margin-bottom: 4px;
}

.status {
  margin-left: auto;
  display: flex;
}

.status-component {
  margin-left: 0.5rem;
}
</style>
