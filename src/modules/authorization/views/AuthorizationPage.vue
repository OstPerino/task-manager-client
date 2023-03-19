<template>
  <div class="authorization-page">
    <CustomForm>
      <template #header>
        <CustomText font-size="32px" font-weight="700">
          Авторизация
        </CustomText>
      </template>
      <template #actions>
        <CustomInput
          v-model="state.email"
          label-content="Email"
          @input="state.email = $event"
        />
        <CustomInput
          v-model="state.password"
          label-content="Пароль"
          @input="state.password = $event"
          type="password"
        />
      </template>
      <template #button>
        <CustomButton @click="onSubmit"> Войти </CustomButton>
      </template>
    </CustomForm>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

import { login } from "@/modules/authorization/services";
import CustomForm from "@/modules/UI-kit/components/CustomForm.vue";
import CustomText from "@/modules/UI-kit/components/CustomText.vue";
import CustomInput from "@/modules/UI-kit/components/CustomInput.vue";
import CustomButton from "@/modules/UI-kit/components/CustomButton.vue";

const state = reactive({
  email: "",
  password: "",
});

const onSubmit = async () => {
  try {
    const response = await login({
      email: state.email,
      password: state.password
    });
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};
</script>

<style scoped lang="scss">
.authorization-page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
