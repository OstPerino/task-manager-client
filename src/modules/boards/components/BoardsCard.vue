<template>
  <li class="boards-card" @click="onClickHandler">
    <div class="top">
      <ProjectsIcon />
      <div class="title">
        <CustomText color="var(--black)" :font-weight="700" class="main-title">
          {{ board.name }}
        </CustomText>
        <CustomText
          color="var(--text-tertiary)"
          :font-weight="400"
          font-size="12px"
        >
          {{ board.description }}
        </CustomText>
      </div>
    </div>
    <div class="middle">
      <!--   TODO: Add in status how much tasks are complete   -->
      <ProjectsStatus status="Выполнено" class="status" />
    </div>
    <div class="bottom">
      <ProjectsProgress width="100" />
    </div>
  </li>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { Board } from "@/modules/boards/types/types";
import CustomText from "@/modules/UI-kit/components/CustomText.vue";
import ProjectsIcon from "@/modules/projects/components/ProjectsIcon.vue";
import ProjectsProgress from "@/modules/projects/components/ProjectsProgress.vue";
import ProjectsStatus from "@/modules/projects/components/ProjectsStatus.vue";

const emit = defineEmits(["click"]);

const props = defineProps({
  board: {
    type: Object as PropType<Board>,
    required: true,
  },
});

const onClickHandler = () => {
  emit("click", props.board?.id);
};
</script>

<style scoped lang="scss">
.boards-card {
  width: 240px;
  height: 137px;
  background-color: var(--white);
  cursor: pointer;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.top {
  display: flex;
}

.title {
  display: flex;
  flex-direction: column;
  margin-left: 0.5rem;
}

.status {
  max-width: 115px;
}

.main-title {
  margin-bottom: 4px;
}
</style>
