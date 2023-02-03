import { useState } from "react";
import ProgressBar from "../progress-bar/progress-bar";

export default function ProgressBar2() {
  const [percent, setPercent] = useState(0);
  const [active, setActive] = useState(false);

  const start = () => {
    setPercent(0);
    if (active) return;
    setActive(true);
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setActive(false);
        }
        return prev + 1;
      });
    }, 50);
  };

  return (
    <div>
      <button onClick={start}>Start</button>
      <ProgressBar percent={percent} />
    </div>
  );
}
