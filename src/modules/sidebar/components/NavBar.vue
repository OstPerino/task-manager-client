<template>
  <nav class="navbar">
    <ul class="link-list">
      <li v-for="link in links" class="list-item">
        <router-link :to="link.url" class="link">
          <font-awesome-icon :icon="['fas', link.icon]" class="icon" />
          <span class="link-text">{{ link.title }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

interface Link {
  title: string;
  url: string;
  icon: string;
}

const links: Array<Link> = [
  {
    title: "Проекты",
    url: "/main",
    icon: "house"
  },
  {
    title: "Чаты",
    url: "/chats",
    icon: "comment"
  },
  {
    title: "Подписки",
    url: "/subscriptions",
    icon: "user-group"
  },
  {
    title: "Выйти",
    url: "/auth",
    icon: "arrow-right-from-bracket"
  },
];
</script>

<style scoped lang="scss">
.navbar {
  background-color: var(--white);
  width: 340px;
  padding: 1rem 0 1rem 1rem;

  .link-list {
    display: flex;
    flex-direction: column;

    .list-item {

      .link {
        padding: 1rem 0;
        width: 100%;
        display: flex;

        .icon {
          color: var(--subtext-gray);
          width: 1rem;
          height: 1rem;
        }

        .link-text {
          margin-left: 1rem;
        }
      }
    }
  }
}
</style>
