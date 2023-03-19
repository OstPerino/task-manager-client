<template>
  <button class="button" @click="onClickHandler">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">

const emit = defineEmits(['click'])

const onClickHandler = () => {
  emit('click');
}

</script>

<style scoped>

</style>