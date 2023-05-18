<template>
  <li class="projects-card" @click="onClickHandler">
    <div class="top">
      <CustomText :font-weight="600">
        {{ project.name }}
      </CustomText>
      <CustomText>
        {{ project.description }}
      </CustomText>
    </div>
    <div class="bottom">
      <CustomText> Кол-во досок: {{ getCountOfBoards }}</CustomText>
    </div>
  </li>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { PropType } from "vue";
import { Project } from "@/modules/projects/services/types";
import CustomText from "@/modules/UI-kit/components/CustomText.vue";

const emit = defineEmits(["click"]);

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
  emit("click", props.project.id);
};
</script>

<style scoped lang="scss">
.projects-card {
  width: 240px;
  height: 137px;
  background-color: var(--white);
  cursor: pointer;
}
</style>
