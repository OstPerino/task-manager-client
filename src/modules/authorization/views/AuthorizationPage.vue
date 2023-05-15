<template>
  <div class="authorization-page">
    <CustomForm>
      <template #header>
        <CustomText
          font-size="17px"
          :font-weight="600"
          color="var(--text-tertiary)"
        >
          Авторизуйтесь в своём аккаунте
        </CustomText>
      </template>
      <template #actions>
        <CustomInput
          v-model="state.email"
          label-content="Email"
          class="input"
          :style="{ marginBottom: '30px' }"
          type="email"
        />
        <CustomInput
          v-model="state.password"
          label-content="Пароль"
          type="password"
          class="input"
        />
      </template>
      <template #sub-message>
        <CustomText
          color="var(--text-secondary)"
          :style="{ cursor: 'pointer' }"
        >
          <span>
            Не помню пароль
            <!--     TODO: Ссылка на регистрацию       -->
          </span>
        </CustomText>
      </template>
      <template #button>
        <CustomButton
          @click="onSubmit"
          :style="{ width: '100%' }"
          :is-disabled="isDisabled"
        >
          <CustomText :font-weight="600" font-size="17px" color="white">
            Войти
          </CustomText>
        </CustomButton>
      </template>
    </CustomForm>
  </div>
</template>

<script setup lang="ts">
import { AxiosError } from "axios";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/modules/authorization/store/auth";
import { onMounted, reactive, watchEffect } from "vue";

import { login } from "@/modules/authorization/services/authorization.service";
import CustomForm from "@/modules/UI-kit/components/CustomForm.vue";
import CustomText from "@/modules/UI-kit/components/CustomText.vue";
import CustomInput from "@/modules/UI-kit/components/CustomInput.vue";
import CustomButton from "@/modules/UI-kit/components/CustomButton.vue";
import { ref } from "@vue/runtime-core";

const router = useRouter();
const auth = useAuthStore();

const state = reactive({
  email: "",
  password: "",
});

const isDisabled = ref<Boolean>(false);

const handleError = (error: AxiosError) => {
  console.log(error);
};

watchEffect(() => {
  isDisabled.value = state.email === "" || state.password === "";
});

const onSubmit = async () => {
  try {
    const response = await login({
      email: state.email,
      password: state.password,
    });

    if (response.status === 201) {
      auth.setAuthState({
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
