import Accordion from "./components/accordion/accordion";
import AccordionInfo from "./components-info/accordion";
import ProgressBar from "./components/progress-bar/progress-bar";
import ProgressBarInfo from "./components-info/progress-bar";
import LikeButton from "./components/like-button/like-button";
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
      return outlet === "main" ? (
        <>
          <h3>Default style</h3>
          <ProgressBar percent={0} />
          <ProgressBar percent={1} />
          <ProgressBar percent={5} />
          <ProgressBar percent={25} />
          <ProgressBar percent={50} />
          <ProgressBar percent={100} />
          <h3>Custom style examples</h3>
          <ProgressBar
            percent={50}
            style={{
              bar: {
                background:
                  "repeating-linear-gradient(45deg, #606dbc, #606dbc 10px, #465298 10px,#465298 20px)",
                color: "white",
              },
              container: { backgroundColor: "lightblue" },
            }}
          />
          <ProgressBar
            percent={33}
            style={{
              bar: {
                backgroundColor: "red",
                color: "red",
              },
              container: { border: "none", height: "5px" },
            }}
          />
        </>
      ) : (
        <ProgressBarInfo />
      );
    case "button":
      return outlet === "main" ? (
        <LikeButton url="mock/api/like" requestApi={mockFetch} />
      ) : (
        <ButtonInfo />
      );
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

function mockFetch(_url: string, _options: any): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve({
          ok: true,
        });
      } else {
        reject({
          error: "Something went wrong",
        });
      }
    }, 1000);
  });
}
