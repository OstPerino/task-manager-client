import $api from "@/api";
import chatsEndPoints from "@/modules/chats/services/chats.end-points";
import {IChat, IMessage} from "@/modules/chats/types/types";

export async function createChat(body: any) {
  return $api.post(`${chatsEndPoints.chats}`);
}

export async function getChats() {
  const response = await $api.get(`${chatsEndPoints.chats}`);
  return response;
}

export async function getCurrentMessages(id: string | number): Promise<any> {
  const response = await $api.get(`${chatsEndPoints.chats}/${id}`);
  console.log('current', response);
  return response.data;
}

export async function getCurrentChat(id: string | number): Promise<any> {
  const response = await $api.get(`${chatsEndPoints.currentChat}/${id}`);
  return response;
}
