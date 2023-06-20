<template>
  <div class="kanban-card">
    <div class="top">
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
    </div>
    <div class="actions">
      <div class="delete">
        <button>
          <font-awesome-icon :icon="['fas', 'trash']" class="icon"/>
        </button>
      </div>
      <div class="edit">
        <button>
          <font-awesome-icon :icon="['fas', 'pencil']" class="icon" />
        </button>
      </div>
    </div>
    <div class="bottom">
      <ProjectsStatus :status="card.branchName"/>
    </div>
    <!--  TODO: Add opening popup with information about task and adding information  -->
    <!--  TODO: Delete button   -->
  </div>
</template>

<script setup lang="ts">
import CustomText from "@/modules/UI-kit/components/CustomText.vue";
import ProjectsStatus from "@/modules/projects/components/ProjectsStatus.vue";
import CustomButton from "@/modules/UI-kit/components/CustomButton.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const props = defineProps(["card"]);
</script>

<style scoped lang="scss">
.top {
  display: flex;
  flex-direction: column;

}

.kanban-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  width: 240px;
  min-height: 137px;
  background-color: var(--white);
  cursor: pointer;
  border-radius: 12px;

  .description {
    margin-top: 4px;
  }

  .actions {
    display: flex;


    button {
      margin-right: 0.5rem;
      outline: none;
      background-color: transparent;
      border: none;
    }
  }
}
</style>
