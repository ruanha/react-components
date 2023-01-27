import Accordion from "./components/accordion/accordion";
import ProgressBar from "./components/progress-bar/progress-bar";
import Button from "./components/button/button";

export default function Component({ componentId }: props) {
  switch (componentId) {
    case "accordion":
      return <Accordion />;
    case "progress-bar":
      return <ProgressBar />;
    case "button":
      return <Button />;
    default:
      return <h1>NO COMPONENT SELECTED</h1>;
  }
}

type props = {
  componentId: string;
};
