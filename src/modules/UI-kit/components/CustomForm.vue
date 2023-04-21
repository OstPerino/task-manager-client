<template>
  <form @submit.prevent class="custom-form">
    <div class="form-item header"><slot name="header"></slot></div>
    <div class="form-item actions"><slot name="actions"></slot></div>
    <div class="form-item sub-message"><slot name="sub-message"></slot></div>
    <div class="form-item error"><slot name="error"></slot></div>
    <div class="form-item button"><slot name="button"></slot></div>
  </form>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.custom-form {
  border: 1px solid black;
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .form-item {
    width: 100%;
    text-align: center;

    .input {
      width: 100%;
    }
  }
}
</style>
