<template>
  <div class="status">
    <CustomText font-size="11px" :font-weight="600" color="white">
      {{ status }}
    </CustomText>
  </div>
</template>

<script setup lang="ts">
import CustomText from "@/modules/UI-kit/components/CustomText.vue";

const props = defineProps({
  status: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.status {
  background-color: var(--success-primary);
  padding: 6px 16px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
}
</style>
