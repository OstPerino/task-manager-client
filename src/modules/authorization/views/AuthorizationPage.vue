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
          class="input"
          :style="{ marginBottom: '30px' }"
        />
        <CustomInput
          v-model="state.password"
          label-content="Пароль"
          @input="state.password = $event"
          type="password"
          class="input"
        />
      </template>
      <template #button>
        <CustomButton @click="onSubmit" :style="{ width: '100%' }">
          Войти
        </CustomButton>
      </template>
    </CustomForm>
  </div>
</template>

<script setup lang="ts">
import { AxiosError } from "axios";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/modules/authorization/store/auth";
import { onMounted, reactive } from "vue";

import { login } from "@/modules/authorization/services";
import CustomForm from "@/modules/UI-kit/components/CustomForm.vue";
import CustomText from "@/modules/UI-kit/components/CustomText.vue";
import CustomInput from "@/modules/UI-kit/components/CustomInput.vue";
import CustomButton from "@/modules/UI-kit/components/CustomButton.vue";

const router = useRouter();
const auth = useAuthStore();

const state = reactive({
  email: "",
  password: "",
});

const handleError = (error: AxiosError) => {
  console.log(error);
};

const onSubmit = async () => {
  try {
    const response = await login({
      email: state.email,
      password: state.password,
    });

    if (response.status === 200) {
      auth.setAuthState({
        email: response.data.email,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        token: response.data.token,
      });
      localStorage.setItem("token", `Bearer ${response.data.token}`);
      await router.push({ path: "/main" });
    }
  } catch (e: any) {
    handleError(e);
  }
};

onMounted(() => {
  auth.clearAuthState();
});
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
