<template>
  <div class="status" :class="setStatusClass">
    <CustomText font-size="11px" :font-weight="600" color="white">
      {{ status }}
    </CustomText>
  </div>
</template>

<script setup lang="ts">
import CustomText from "@/modules/UI-kit/components/CustomText.vue";
import {computed} from "vue";

const props = defineProps({
  status: {
    type: String,
    required: true,
  },
});

const setStatusClass = computed(() => {
  switch (props.status) {
    case "Выполнено":
      return "done";

    case "В работе":
      return "in-work";

    case "Не начато":
      return "not-started";
  }
})
</script>

<style scoped>
.status {
  padding: 6px 16px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
}

.done {
  background-color: var(--success-primary);
  color: var(--white);
}

.in-work {
  background-color: var(--red);
  color: var(--white);
}

.not-started {
  background-color: var(--text-subtext);
  color: var(--white);
}
</style>
