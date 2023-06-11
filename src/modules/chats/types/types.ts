export interface IMessage {
  id?: number;
  text: string;
  senderId?: number;
  senderName: string;
  time: string;
}

export interface IChat {
  id?: number;
  firstUserId: number;
  secondUserId: number;
  messages: IMessage[];
}