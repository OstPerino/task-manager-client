<template>
  <SideBar class="sidebar" v-if="showSidebar" />
  <main class="main">
    <router-view />
  </main>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import SideBar from "@/modules/layouts/components/SideBar.vue";
// test

const route = useRoute();

const showSidebar = computed(() => {
  return route.meta.requires;
});
</script>

<style lang="scss">
@import "@/styles/base.scss";
</style>
