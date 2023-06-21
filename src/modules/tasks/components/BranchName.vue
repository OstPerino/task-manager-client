<template>
  <div class="branch-name">
    {{ props.branchName }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  branchName: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.branch-name {
  background-color: var(--blue);
  color: var(--white);
  padding: 0.25rem;
  border-radius: 12px;
  text-align: center;
}
</style>