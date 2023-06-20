<template>
  <div class="table-title">
    <div class="left">
      <IconButton @click="props.pushBack">
        <img src="@/modules/UI-kit/images/back-icon.svg" alt="arrow" />
        <CustomText color="black" :font-weight="600" font-size="14px">
          Назад
        </CustomText>
      </IconButton>
    </div>
    <div class="mid">
      <div class="top">
        <CustomText color="black" :font-weight="700" font-size="16px">
          {{ props.title }}
        </CustomText>
      </div>
      <div class="bottom">
        <CustomText
          color="var(--subtext-gray)"
          :font-weight="600"
          font-size="12px"
        >
          {{ props.description }}
        </CustomText>
      </div>
    </div>
    <div class="right">
      <IconButton @click="onInviteClick">
        <font-awesome-icon :icon="['fas', 'user']" class="button-icon" />
      </IconButton>
      <IconButton @click="onCreateClick">
        <font-awesome-icon :icon="['fas', 'plus']" class="button-icon" />
      </IconButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useModalStore } from "@/modules/layouts/store/modal";
import { toast } from "vue3-toastify";
import CustomText from "@/modules/UI-kit/components/CustomText.vue";
import IconButton from "@/modules/UI-kit/components/IconButton.vue";

const modal = useModalStore();

const props = defineProps({
  title: {
    type: String,
    required: true,
    default: "",
  },
  description: {
    type: String,
    required: true,
    default: "",
  },
  pushBack: {
    type: Function,
    required: true,
  },
  createType: {
    type: String,
    required: true,
  },
});

const onCreateClick = () => {
  modal.setCurrentModal(props.createType);
};

const onInviteClick = () => {
  modal.setCurrentModal('inviteUserToProject');
};
</script>

<style scoped lang="scss">
.table-title {
  padding: 13px 0;
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 987px;
  border-radius: 12px;

  .left {
    display: flex;
    align-items: center;
  }
}

.bottom {
  text-align: center;
}

.left {
  margin-left: 0.5rem;
}

.right {
  margin-right: 0.5rem;
  display: flex;
}

.button-icon {
  width: 20px;
  height: 20px;

  &:first-child {
    margin-right: 0.5rem;
  }
}

.top {
  text-align: center;
}
</style>
