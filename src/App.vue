<template>

  <div class="main">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CustomInput from "@/modules/UI-kit/components/CustomInput.vue";

const tempValue = ref<string>("");
</script>

<style lang="scss">
@import "@/styles/base.scss";
</style>
