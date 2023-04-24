<template>
  <div class="task-counter">
    <img src="@/modules/tasks/images/done-icon.svg" alt="done">
     <CustomText color="var(--light-blue)" font-size="12px">{{ content }} задач</CustomText>
  </div>
</template>

<script setup lang="ts">

import CustomText from "@/modules/UI-kit/components/CustomText.vue";

const props = defineProps({
  content: {
    type: String,
    required: false,
    default: "0"
  }
})

</script>

<style scoped lang="scss">
.task-counter {
  display: flex;
  align-items: center;

  img {
    margin-right: 0.5rem;
  }
}
</style>