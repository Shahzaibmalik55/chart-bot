import { Image } from "primereact/image";

import "./bot-response-message.scss";
import { HighCharts } from "../high-charts/high-charts";

interface BotResponseMessageProps {
  data: {
    message: string;
    categories: any;
    data: any[];
  };
  title: string;
}

export const BotResponseMessage = ({
  data,
  title,
}: BotResponseMessageProps) => {
  return (
    <div className="bot-response-message">
      <div>
        <Image
          src="https://w7.pngwing.com/pngs/529/418/png-transparent-computer-icons-internet-bot-eyes-miscellaneous-people-sticker-thumbnail.png"
          width="35px"
          height="35px"
          imageClassName="image"
        />
      </div>

      <div className="data">
        {data?.data?.length && (
          <div className="graph-data">
            <HighCharts
              categories={data.categories}
              data={data.data}
              title={title}
            />
          </div>
        )}
        {data.message && <div className="message">{data.message}</div>}
      </div>
    </div>
  );
};
