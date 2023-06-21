<template>
  <div class="empty-projects">
    <div class="content">
      <div class="title">
        <span class="text">
          У вас еще нет проектов
        </span>
      </div>
      <div class="subtitle">
        <span class="text">
          Но вы можете создать новый проект или ожидать, пока вас добавят
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//TODO: This component
</script>

<style scoped lang="scss">
.empty-projects {
  margin-top: 1.5rem;
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