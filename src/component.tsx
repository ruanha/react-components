import Accordion from "./components/accordion/accordion";
import ProgressBar from "./components/progress-bar/progress-bar";
import Button from "./components/button/button";
import { useOutletContext } from "react-router-dom";

export default function Component({ componentId }: props) {
  const outlet = useOutletContext();

  if (outlet === "main") {
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
  if (outlet === "aside") {
    return <h1>ASIDE Content</h1>;
  }
  return <h1>NO OUTLET</h1>;
}

type props = {
  componentId: string;
};
