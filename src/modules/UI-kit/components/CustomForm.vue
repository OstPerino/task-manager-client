<template>
  <form @submit.prevent class="custom-form">
    <slot name="header"></slot>
    <slot name="actions"></slot>
    <slot name="sub-message"></slot>
    <slot name="error"></slot>
    <slot name="button"></slot>
  </form>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

</style>
