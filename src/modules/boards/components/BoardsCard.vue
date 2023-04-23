<template>
  <li class="boards-card" @click="onClickHandler">
    <div class="top">
      <CustomText>{{ board.title }}</CustomText>
      <CustomText>{{ board.description }}</CustomText>
    </div>
  </li>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { Board } from "@/modules/boards/types/types";
import CustomText from "@/modules/UI-kit/components/CustomText.vue";

const emit = defineEmits(["click"])

const props = defineProps({
  board: {
    type: Object as PropType<Board>,
    required: true,
  },
});

const onClickHandler = () => {
  emit("click", props.board.id);
}
</script>

<style scoped lang="scss">
.boards-card {
  width: 240px;
  height: 137px;
  background-color: var(--white);
  cursor: pointer;

  .top {
    display: flex;
    flex-direction: column;
  }
}
</style>
