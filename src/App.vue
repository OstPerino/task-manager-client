<template>
  <SideBar class="sidebar" v-if="showSidebar" />
  <ModalWrapper v-if="modal.showModal" />
  <main class="main">
    <router-view />
  </main>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import SideBar from "@/modules/layouts/components/SideBar.vue";
import ModalWrapper from "@/modules/layouts/components/ModalWrapper.vue";
import {useModalStore} from "@/modules/layouts/store/modal";

const route = useRoute();
const modal = useModalStore();

const showSidebar = computed(() => {
  return route.meta.requires;
});
</script>

<style lang="scss">
@import "@/styles/base.scss";
</style>
