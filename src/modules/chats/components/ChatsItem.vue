<template>
  <div class="chats-item" @click="onCLickHandler">
    <div class="left-chat-content">
      <div class="user-image">
        <img src="@/modules/chats/images/icons/user.png" alt="profile-icon" />
      </div>
      <div class="right-container">
        <div class="content">
          <CustomText
            :font-weight="600"
            font-size="14px"
            color="var(--black)"
            class="top"
          >
            {{ `${userInfo.firstName} ${userInfo.lastName}` }}
          </CustomText>
          <CustomText
            :font-weight="600"
            font-size="14px"
            color="var(--text-subtext)"
          >
            {{ getLastMessage }}
          </CustomText>
        </div>
        <div class="last-date">
          <CustomText
            color="var(--text-subtext)"
            :font-weight="600"
            font-size="14px"
          >
            {{ getDateOfLastMessage }}
          </CustomText>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CustomText from "@/modules/UI-kit/components/CustomText.vue";
import { computed, onMounted, PropType, reactive } from "vue";
import { useAuthStore } from "@/modules/authorization/store/auth";
import { IChat } from "@/modules/chats/types/types";
import { getUserInfo } from "@/modules/authorization/services/authorization.service";
import { Nullable } from "@/types";

const userInfo = reactive({
  id: 0,
  firstName: "",
  lastName: "",
  email: "",
});

const emit = defineEmits(["click"]);

const auth = useAuthStore();

const props = defineProps({
  chat: {
    type: Object as PropType<Nullable<IChat>>,
    required: true,
  },
});
//
const onCLickHandler = () => {
  emit("click", props?.chat?.id);
};

const getLastMessage = computed(() => {
  if (props.chat) {
    if (!props.chat?.messages?.length) {
      return "Пока что нет сообщений";
    } else {
      return props.chat?.messages[props.chat?.messages?.length - 1]?.text;
    }
  }
});

const getDateOfLastMessage = computed(() => {
  if (!props?.chat?.messages.length) {
    return "";
  } else {
    return props.chat.messages[props.chat.messages.length - 1].time;
  }
});

const getForeignUserId = () => {
  return props.chat?.firstUserId === auth.userId
    ? props.chat?.secondUserId
    : props.chat?.firstUserId;
};

const init = async () => {
  try {
    const chatPartnerId = getForeignUserId();
    const chatPartnerData = await getUserInfo(chatPartnerId);
    userInfo.email = chatPartnerData.email;
    userInfo.firstName = chatPartnerData.firstName;
    userInfo.lastName = chatPartnerData.lastName;
    userInfo.id = chatPartnerData.id;
  } catch (e) {
    console.log(e);
  }
};

// TODO: Get user by id
onMounted(async () => {
  await init();
});
</script>

<style scoped lang="scss">
.chats-item {
  cursor: pointer;
  padding: 12px 1.5rem 12px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--background-tertiary);

  &:last-child {
    border-bottom: none;
  }
}

.left-chat-content {
  display: flex;
  width: 100%;
}

.user-image {
  margin-left: 24px;
  margin-right: 15px;

  img {
    max-width: 48px;
    max-height: 48px;
  }
}

.content {
  display: flex;
  flex-direction: column;
}

.top {
  margin-bottom: 9px;
}

.right-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
