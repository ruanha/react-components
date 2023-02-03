import ProgressBar from "../progress-bar/progress-bar";

export default function ProgressBar2() {
  return (
    <div>
      <ProgressBar percent={0} />
      <ProgressBar percent={50} />
      <ProgressBar percent={100} />
    </div>
  );
}
