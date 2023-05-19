import { defineStore } from "pinia";
import { IChat, IMessage } from "@/modules/chats/types/types";
import {
  getChats, getCurrentChat,
  getCurrentMessages,
} from "@/modules/chats/services/chats.services";
import {Nullable, Undefinable} from "@/types";

export const useChatsStore = defineStore("chats", {
  state: () => {
    return {
      messages: [] as IMessage[],
      chats: [] as IChat[],
      currentChat: undefined as Undefinable<IChat>,
    };
  },
  actions: {
    async setChats() {
      try {
        const response = await getChats();
        console.log(response);
        this.chats = response.data;
      } catch (e: any) {
        return e.response;
      }
    },
    async setMessages(id: number | string) {
      try {
        const response = await getCurrentMessages(id);
        this.messages = response;
      } catch (e: any) {
        return e.response;
      }
    },
    async setCurrentChat(id: number | string) {
      try {
        const response = await getCurrentChat(id);
        this.currentChat = response.data;
      } catch (e: any) {
        return e.response;
      }
    },
    addMessage(newMessage: any) {
      this.messages.push(newMessage);
    },
  },
});

// {
//   id: 1,
//   text: "Привет, как дела?",
//   senderName: "Никита",
//   time: "12:20"
// },
// {
//   id: 2,
//   text: "Все впорядке, как у тебя?",
//   senderName: "Александр",
//   time: "12:22"
// },
// {
//   id: 3,
//   text: "Тоже ничего, сижу работаю",
//   senderName: "Никита",
//   time: "12:24"
// },
