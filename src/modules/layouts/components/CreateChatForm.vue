<template>
  <div class="create-chat-form">
    <UserListItem
        v-for="user in users"
        :key="user.id"
        :user="user"
        :isSelected="user.id === selectedUserId"
        @selectUser="selectUser"
    />
  </div>
</template>

<script setup lang="ts">
import {ref} from "@vue/runtime-core";
import {User} from "@/modules/authorization/services/types";
import {onMounted} from "vue";
import {getUsers} from "@/modules/authorization/services/authorization.service";
import UserListItem from "@/modules/UI-kit/components/UserListItem.vue";

const users = ref<Array<User>>([]);
const selectedUserId = ref<number>(0);

const emit = defineEmits(["update:formState"]);

onMounted(async () => {
  const response = await getUsers();
  users.value = response.data;
});

const selectUser = (user: User) => {
  selectedUserId.value = user.id;
  emit("update:formState", user.id);
}
</script>

<style scoped>

</style>