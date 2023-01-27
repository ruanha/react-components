import Accordion from "./components/accordion/accordion";
import AccordionInfo from "./components-info/accordion";
import ProgressBarExample from "./components-examples/progress-bar";
import ProgressBarInfo from "./components-info/progress-bar";
import Button from "./components/button/button";
import ButtonInfo from "./components-info/button";
import { useOutletContext } from "react-router-dom";

export default function Component({ componentId }: props) {
  const outlet = useOutletContext();

  switch (componentId) {
    case "accordion":
      return outlet === "main" ? <Accordion /> : <AccordionInfo />;
    case "progress-bar":
      return outlet === "main" ? <ProgressBarExample /> : <ProgressBarInfo />;
    case "button":
      return outlet === "main" ? <Button /> : <ButtonInfo />;
    default:
      return <h1>NO COMPONENT SELECTED</h1>;
  }
}

type props = {
  componentId: string;
};
