<template>
  <div class="main-page">

  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { toast } from "vue3-toastify";
import {onMounted} from "vue";

const router = useRouter();
const route = useRoute();

const showToast = () => {
  toast.success("Toast");
}

// const test = async () => {
//   try {
//     const response = await axios.get('http://localhost:8000/api/projects/');
//     console.log(response);
//   } catch (e) {
//     console.log(e);
//   }
// }

// onMounted(async () => {
//   await test();
// })
</script>

<style scoped lang="scss">
.main-page {
}
</style>
