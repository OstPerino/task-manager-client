<template>
  <div class="project-actions">
    <IconButton @click="openCreateProjectPopup">
      <CustomText color="black" :font-weight="600" font-size="14px">
        Создать проект
      </CustomText>
    </IconButton>
  </div>
</template>

<script setup lang="ts">
// TODO: Make actions bar for project (create project and other)
import { Modals } from "@/modules/layouts/types/modal.enum";
import { useModalStore } from "@/modules/layouts/store/modal";
import IconButton from "@/modules/UI-kit/components/IconButton.vue";
import CustomText from "@/modules/UI-kit/components/CustomText.vue";

const modal = useModalStore();

const openCreateProjectPopup = () => {
  modal.setCurrentModal(Modals.createProject);
};
</script>

<style scoped lang="scss">
.project-actions {
  background-color: var(--white);
  padding: 1.5rem;
  border-radius: 12px;
}
</style>
