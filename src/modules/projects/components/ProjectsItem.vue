<template>
  <li class="projects-item" @click="onClickHandler">
    <div class="title">
      <CustomText class="title-text" :font-weight="600" font-size="14px">
        {{ project.title }}
      </CustomText>
      <CustomText class="title-subtitle" font-size="12px" :font-weight="400">
        {{ project.description }}
      </CustomText>
    </div>
  </li>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { PropType } from "vue";
import { Project } from "@/modules/projects/services/types";
import CustomText from "@/modules/UI-kit/components/CustomText.vue";

const emit = defineEmits(["click"])

const props = defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true,
  },
});

const getCountOfBoards = computed(() => {
  return props.project.boards.length;
});

const onClickHandler = () => {
  emit("click", props.project.id)
}
</script>

<style scoped lang="scss">
.projects-item {
  border-bottom: 1px solid #DCDCDC;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }
}

.title {
  display: flex;
  flex-direction: column;
}

.title-text {
  margin-bottom: 4px;
}
</style>