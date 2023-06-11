<template>
  <div class="registration-page">
    <CustomForm>
      <template #header>
        <CustomText
          font-size="17px"
          :font-weight="600"
          color="var(--text-tertiary)"
          :style="{ marginBottom: '15px' }"
        >
          Зарегестрироваться
        </CustomText>
      </template>
      <template #actions>
        <CustomInput
          v-model="state.email"
          label-content="Email"
          :style="{ marginBottom: '1.5rem' }"
        />
        <CustomInput
          v-model="state.password"
          label-content="Пароль"
          type="password"
          :style="{ marginBottom: '1.5rem' }"
        />
        <CustomInput
          v-model="state.firstName"
          label-content="Имя"
          :style="{ marginBottom: '1.5rem' }"
        />
        <CustomInput
          v-model="state.lastName"
          label-content="Фамилия"
          :style="{ marginBottom: '1.5rem' }"
        />
        <CustomDropdown
          :selected-option="currentSpecification"
          :options="specifications"
          :style="{ marginBottom: '1.5rem' }"
          @update:selected-option="onUpdateSelectedOption"
        />
      </template>
      <template #button>
        <CustomButton
          @click="onSubmit"
          :style="{ width: '100%' }"
          :is-disabled="disableSubmit"
        >
          <CustomText :font-weight="600" font-size="17px" color="white">
            Создать аккаунт
          </CustomText>
        </CustomButton>
      </template>
    </CustomForm>
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/runtime-core";
import { computed, reactive } from "vue";
import { registration } from "@/modules/authorization/services/authorization.service";
import CustomForm from "@/modules/UI-kit/components/CustomForm.vue";
import CustomText from "@/modules/UI-kit/components/CustomText.vue";
import CustomInput from "@/modules/UI-kit/components/CustomInput.vue";
import CustomButton from "@/modules/UI-kit/components/CustomButton.vue";
import { RegistrationData } from "@/modules/authorization/services/types";
import CustomDropdown from "@/modules/UI-kit/components/CustomDropdown.vue";
import { Nullable } from "@/types";
import { useRouter } from "vue-router";

const router = useRouter();

const state = reactive<any>({
  email: "",
  password: "",
  specialization: "",
  firstName: "",
  lastName: "",
});

const specifications = ref([
  {
    label: "Не выбрано",
  },
  {
    label: "Frontend",
  },
  {
    label: "Backend",
  },
  {
    label: "Mobile App iOS",
  },
  {
    label: "Mobile App Android",
  },
  {
    label: "Desktop App",
  },
]);
const currentSpecification = reactive<Nullable<any>>({ label: "Не выбрано" });

const onUpdateSelectedOption = (specification: any) => {
  currentSpecification.label = specification.label;
};

const disableSubmit = computed(() => {
  return (
    state.email === "" ||
    state.password === "" ||
    state.firstName === "" ||
    state.lastName === "" ||
    currentSpecification.label === "Не выбрано"
  );
});

const onSubmit = async () => {
  try {
    await registration({
      firstName: state.firstName,
      lastName: state.lastName,
      password: state.password,
      email: state.email,
      specification: currentSpecification.label,
    });
    await router.push({ path: '/auth' })
  } catch (e) {}
};
</script>

<style scoped lang="scss">
.registration-page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
