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
  background-color: var(--white);
  border-radius: 12px;
  min-width: 407px;
  min-height: 480px;
  padding: 48px 32px 32px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .header {
    color: var(--text-tertiary);
    margin-bottom: 1.5rem;
  }

  .form-item {
    width: 100%;
    text-align: center;

    .input {
      width: 100%;
    }
  }
}
</style>
