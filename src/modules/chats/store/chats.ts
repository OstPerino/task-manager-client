import { defineStore } from "pinia";
import { IChat, IMessage } from "@/modules/chats/types/types";
import { Undefinable } from "@/types";
import {
  createChat,
  getChats,
  getCurrentChat,
  getCurrentMessages,
} from "@/modules/chats/services/chats.services";

export const useChatsStore = defineStore("chats", {
  state: () => {
    return {
      messages: [] as IMessage[],
      chats: [] as IChat[],
      currentChat: undefined as Undefinable<IChat>,
    };
  },
  actions: {
    async createChat(body: any) {
      try {
        await createChat(body);
      } catch (e) {
        console.log(e);
      }
    },
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
