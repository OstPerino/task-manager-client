<template>
  <div class="registration-page">
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
        <CustomButton @click="onSubmit"> Войти</CustomButton>
      </template>
    </CustomForm>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { registration } from "@/modules/authorization/services";
import CustomForm from "@/modules/UI-kit/components/CustomForm.vue";
import CustomText from "@/modules/UI-kit/components/CustomText.vue";
import CustomInput from "@/modules/UI-kit/components/CustomInput.vue";
import CustomButton from "@/modules/UI-kit/components/CustomButton.vue";
import {RegistrationData} from "@/modules/authorization/services/types";

const state = reactive<RegistrationData>({
  email: "",
  password: "",
  username: ""
});

const onSubmit = async () => {
  try {
    const response = await registration({
      username: state.username,
      password: state.password,
      email: state.email
    });
  } catch (e) {}
};
</script>

<style scoped lang="scss"></style>
