<template>
  <!--  -->
  <div class="user-list-item" :class="{ 'selected': isSelected }" @click="selectUser">
    <div class="left">
      <div class="user-list-item__avatar">{{ `${user.firstName} ${user.lastName}` }}</div>
      <div class="user-list-item__name">{{ user.email }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { User } from "@/modules/authorization/services/types";
import { PropType } from "vue";

const emit = defineEmits(["selectUser"]);

const props = defineProps({
  user: {
    type: Object as PropType<User>,
    required: true
  },
  isSelected: {
    type: Boolean,
    required: true
  },
});

const selectUser = () => {
  emit("selectUser", props.user);
};
</script>

<style scoped lang="scss">
.user-list-item {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 12px;
}

.selected {
  background-color: var(--background-default);
}
</style>
