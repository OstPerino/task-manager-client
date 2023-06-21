<template>
  <div class="empty-tasks">
    <div class="content">
      <div class="title">
        <span class="text">
          На данной доске пока нет задач
        </span>
      </div>
      <div class="subtitle">
        <span class="text">
          Вы можете создать новую задачу
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.empty-tasks {
  width: 987px;
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