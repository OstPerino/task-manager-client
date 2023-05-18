import { defineStore } from "pinia";
import { IMessage } from "@/modules/chats/types/types";

// TODO: move to types of chats

export const useChatsStore = defineStore("chats", {
  state: () => {
    return {
      messages: [
        {
          id: 1,
          text: "Привет, как дела?",
          senderName: "Никита",
          time: "12:20"
        },
        {
          id: 2,
          text: "Все впорядке, как у тебя?",
          senderName: "Александр",
          time: "12:22"
        },
        {
          id: 3,
          text: "Тоже ничего, сижу работаю",
          senderName: "Никита",
          time: "12:24"
        },
      ] as IMessage[],
    };
  },
  actions: {
    setMessages() {},
    addMessage(newMessage: any) {
      this.messages.push(newMessage);
    },
  },
});
