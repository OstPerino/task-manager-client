<template>
  <div class="sidebar">
    <NavBar />
    <!--  TODO: Add mark of creator  -->
    <!--  TODO: Think about statistics of activity created and completed tasks  -->
  </div>
</template>

<script setup lang="ts">
import NavBar from "@/modules/layouts/components/NavBar.vue";
</script>

<style scoped>
.sidebar {
  margin: 44px 22px 22px 44px;
}
</style>
