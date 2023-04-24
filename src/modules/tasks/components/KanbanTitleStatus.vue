<template>
  <div class="status">
    {{ props.content }}
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  content: {
    type: String,
    required: true,
    default: ""
  }
})

</script>

<style scoped lang="scss">
.status {
  background-color: var(--white);
  padding: 4px 8px;
  border: 1px solid #000;
  border-radius: 10px;
  font-size: 12px;
  color: #000;
  white-space: nowrap;
}
</style>