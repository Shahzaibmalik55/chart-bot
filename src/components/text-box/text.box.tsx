import { useState } from "react";
import { InputText } from "primereact/inputtext";

import "./text.box.scss";
import { Divider } from "primereact/divider";

interface TextBoxProps {
  onSend: (text: string) => void;
  isLoading: boolean;
}

export const TextBox = ({ isLoading, onSend }: TextBoxProps) => {
  const [input, setInput] = useState("");

  const onClickSend = () => {
    if (input) {
      onSend(input);
      setInput("");
    }
  };

  const onEnter = (key: string) => {
    if (input && key === "Enter") {
      onSend(input);
      setInput("");
    }
  };

  return (
    <div className="text-box-container">
      <Divider style={{ marginTop: 0 }} />
      <div className="text-box">
        <span className="p-input-icon-right">
          <i
            className={`pi ${isLoading ? "pi-spin pi-spinner" : "pi-send"} ${
              input ? "cursor-pointer primary" : ""
            }`}
            onClick={onClickSend}
          />
          <InputText
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
            onKeyDown={(e) => onEnter(e.key)}
          />
        </span>
      </div>
    </div>
  );
};
