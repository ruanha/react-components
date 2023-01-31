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
      return outlet === "main" ? (
        <Accordion sections={accordianSections} />
      ) : (
        <AccordionInfo />
      );
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

const accordianSections = [
  {
    title: "HTML",
    text: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    title: "CSS",
    text: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
  },
  {
    title: "JavaScript",
    text: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
  },
];
