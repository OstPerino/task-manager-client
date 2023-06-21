<template>
  <div class="invite-user-to-project">
    <UserListItem
      v-for="user in users"
      :key="user.id"
      :user="user"
      :isSelected="user.email === selectedUserEmail"
      @selectUser="selectUser"
    />
  </div>
</template>

<script setup lang="ts">
import { getUsers } from "@/modules/authorization/services/authorization.service";
import { onMounted, reactive } from "vue";
import UserListItem from "@/modules/UI-kit/components/UserListItem.vue";
import { ref } from "@vue/runtime-core";
import { User } from "@/modules/authorization/services/types";
import { Nullable } from "@/types";

const users = ref<Array<User>>([]);
const selectedUserEmail = ref<string>("");

const emit = defineEmits(["update:formState"]);

onMounted(async () => {
  const response = await getUsers();
  users.value = response.data;
});

const selectUser = (user: User) => {
  selectedUserEmail.value = user.email;
  emit("update:formState", selectedUserEmail);
}
</script>

<style scoped></style>
