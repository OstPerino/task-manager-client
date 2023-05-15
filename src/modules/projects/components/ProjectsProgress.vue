<template>
  <div class="progress">
    <CustomText class="percent" color="var(--text-tertiary)" font-size="12px" :font-weight="400">
      {{ width }}%
    </CustomText>
    <div class="line"></div>
  </div>
</template>

<script setup lang="ts">
import CustomText from "@/modules/UI-kit/components/CustomText.vue";

const props = defineProps({
  width: {
    type: String,
    required: true
  }
})
</script>

<style scoped lang="scss">
.progress {
  width: 100%;
  background-color: var(--background-tertiary);
  height: 1px;
  position: relative;
}

.line {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 1px;
  background-color: var(--text-tertiary);
}

.percent {
  position: absolute;
  top: -20px;
  right: 0;
}
</style>