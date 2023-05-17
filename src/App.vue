<template>
  <SideBar class="sidebar" v-if="showSidebar" />
  <ModalWrapper v-if="false" />
  <main class="main">
    <router-view />
  </main>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import SideBar from "@/modules/layouts/components/SideBar.vue";
import ModalWrapper from "@/modules/layouts/components/ModalWrapper.vue";

const route = useRoute();

const showSidebar = computed(() => {
  return route.meta.requires;
});
</script>

<style lang="scss">
@import "@/styles/base.scss";
</style>
