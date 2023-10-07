export enum MessageType {
  UserInput = "userInput",
  BotResponse = "BotResponse",
}

export interface IMessage {
  messageType: MessageType;
  data: any;
}
