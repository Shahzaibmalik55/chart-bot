import { Image } from "primereact/image";

import "./user-input-message.scss";

interface UserInputMessageProps {
  data: {
    input: string;
  };
}

export const UserInputMessage = ({ data }: UserInputMessageProps) => {
  return (
    <div className="user-input-message">
      <div>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
          width="35px"
          height="35px"
          imageClassName="image"
        />
      </div>
      <div className="input-text">{data.input}</div>
    </div>
  );
};
