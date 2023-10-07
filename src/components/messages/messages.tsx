import { IMessage, MessageType } from "../../types";
import { BotResponseMessage } from "../bot-response-message/bot-response-message";
import { UserInputMessage } from "../user-input-message/user-input-message";

import "./messages.scss";

interface MessagesProps {
  messages: IMessage[];
  isLoading: boolean;
  title: string;
}

export const Messages = ({ messages, isLoading, title }: MessagesProps) => {
  return (
    <div className="messages-container">
      {messages.map(({ messageType, data }, index) =>
        messageType === MessageType.UserInput ? (
          <UserInputMessage data={data} key={index} />
        ) : (
          <BotResponseMessage data={data} key={index} title={title} />
        )
      )}

      {isLoading && (
        <div className="loading-text">
          <span>Please hang on we're searching for you're answer</span>
          <i className="pi pi-spin pi-spinner" />
        </div>
      )}
    </div>
  );
};
