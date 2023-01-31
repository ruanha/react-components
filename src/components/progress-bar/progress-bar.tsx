import { CSSProperties } from "react";
import "./progress-bar.css";

export default function ProgressBar({ style, percent = 0 }: props) {
  percent = percent < 0 ? 0 : percent;
  percent = percent > 100 ? 100 : percent;

  if (isNaN(percent)) {
    percent = 0;
    console.warn("ProgressBar: percent prop is NaN");
  }

  return (
    <div className="progress-bar" style={{ ...style?.container }}>
      <div className="progress" style={{ ...style?.bar, width: `${percent}%` }}>
        {percent.toFixed(0)}%
      </div>
    </div>
  );
}

type styleProp = {
  bar?: CSSProperties;
  container?: CSSProperties;
};

type props = {
  style?: styleProp;
  percent?: number;
};
