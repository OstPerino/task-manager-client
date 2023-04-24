<template>
  <div class="table-title">
    <div class="left">
      <CustomButton @click="props.pushBack">
        <img
            src="@/modules/UI-kit/images/back-icon.svg"
            alt="arrow"
        />
        <CustomText
            color="black"
            :font-weight="600"
            font-size="14px"
        >
          Назад
        </CustomText>
      </CustomButton>
    </div>
    <div class="mid">
      <div class="top">
        <CustomText
            color="black"
            :font-weight="700"
            font-size="16px"
        >
          {{ props.title }}
        </CustomText>
      </div>
      <div class="bottom">
        <CustomText
            color="var(--subtext-gray)"
            font-weight="font-weight-semibold"
            font-size="12px"
        >
          {{ props.description }}
        </CustomText>
      </div>
    </div>
    <div class="right">
      <div class="field"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import CustomText from "@/modules/UI-kit/components/CustomText.vue";
import CustomButton from "@/modules/UI-kit/components/CustomButton.vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
    default: ""
  },
  description: {
    type: String,
    required: true,
    default: ""
  },
  pushBack: {
    type: Function,
    required: true
  }
})

// const pushBack = () => {};
</script>

<style scoped lang="scss">
.table-title {
  padding: 13px 0;
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 987px;

  .left {
    display: flex;
    align-items: center;
  }
}
</style>
