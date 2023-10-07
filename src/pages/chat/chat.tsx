import { useState, useEffect, useRef } from "react";
import { TextBox } from "../../components/text-box/text.box";
import { Messages } from "../../components/messages/messages";
import { IMessage, MessageType } from "../../types";

import "./chat.scss";

export const Chat = () => {
  const messagesRef = useRef<any>(null);

  const [inputText, setTextInput] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<IMessage[]>([
    {
      messageType: MessageType.BotResponse,
      data: {
        message: "Hello! How can I assist you today?",
      },
    },
  ]);

  const getData = async (input: string) => {
    try {
      const response = await fetch(`graph.json`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      return response.json();
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const data = await getData(inputText);
      setTimeout(() => {
        const message: IMessage = {
          messageType: MessageType.BotResponse,
          data: { ...data },
        };
        setMessages([...messages, message]);
        setIsLoading(false);
      }, 2000);
    }
    if (inputText) fetchData();
  }, [inputText]);

  useEffect(() => {
    if (messagesRef.current) {
      window.scrollTo({
        behavior: "smooth",
        top: messagesRef.current.scrollHeight,
      });
    }
  }, [messages.length, isLoading]);

  const onSend = (text: string) => {
    const message: IMessage = {
      messageType: MessageType.UserInput,
      data: {
        input: text,
      },
    };
    setTextInput(text);
    setMessages([...messages, message]);
  };

  return (
    <div className="chat-container">
      <div className="messages-content" ref={messagesRef}>
        <Messages messages={messages} isLoading={isLoading} title={inputText} />
      </div>

      <TextBox onSend={onSend} isLoading={isLoading} />
    </div>
  );
};
