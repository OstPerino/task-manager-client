<template>
  <div class="empty-boards">
    <div class="content">
      <div class="title">
        <span class="text">
          У вас еще нет досок
        </span>
      </div>
      <div class="subtitle">
        <span class="text">
          Но вы можете создать новую
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//TODO: This component
</script>

<style scoped lang="scss">
.empty-boards {
  margin-top: 0.5rem;
  padding: 3rem;
  text-align: center;
  background-color: var(--white);
  border-radius: 12px;
}

.text {
  font-weight: 600;
  font-size: 17px;
}
</style>