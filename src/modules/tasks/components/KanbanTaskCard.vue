<template>
  <div class="kanban-card">
    <CustomText :font-weight="600">
      {{ card.title }}
    </CustomText>
    <CustomText
      color="var(--subtext-gray)"
      font-size="12px"
      class="description"
    >
      {{ card.description }}
    </CustomText>
    <!--  TODO: Add opening popup with information about task and adding information  -->
    <!--  TODO: Delete button   -->
  </div>
</template>

<script setup lang="ts">
import CustomText from "@/modules/UI-kit/components/CustomText.vue";

const props = defineProps(["card"]);
</script>

<style scoped lang="scss">
.kanban-card {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 240px;
  height: 137px;
  background-color: var(--white);
  cursor: pointer;
  border-radius: 12px;

  .description {
    margin-top: 4px;
  }
}
</style>
