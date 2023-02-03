import Accordion from "./components/accordion/accordion";
import AccordionInfo from "./components-info/accordion";
import ProgressBar from "./components/progress-bar/progress-bar";
import ProgressBarInfo from "./components-info/progress-bar";
import LikeButton from "./components/like-button/like-button";
import LikeButtonInfo from "./components-info/like-button";
import { useOutletContext } from "react-router-dom";
import Tabs from "./components/tabs/tabs";
import TabsInfo from "./components-info/tabs";
import ProgressBar2 from "./components/progress-bar-II/progress-bar-ii";

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
          <h3>Progress Bar 2</h3>
          <ProgressBar2 />
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
                  "repeating-linear-gradient(45deg, var(--primary), var(--primary) 10px, var(--primary-shade-2) 10px,var(--primary-shade-2) 20px)",
                color: "white",
              },
              container: { backgroundColor: "var(--grey-lighter)" },
            }}
          />
          <ProgressBar
            percent={33}
            style={{
              bar: {
                backgroundColor: "var(--primary)",
                color: "var(--primary)",
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
        <>
          <h3>Like Button</h3>
          <p>Try to hover and click the buttons</p>
          <LikeButton url="mock/api/like" requestApi={mockFetch} />
          <h3>Connection/Server error</h3>
          <LikeButton url="mock/api/like" requestApi={mockFetchFail} />
        </>
      ) : (
        <LikeButtonInfo />
      );
    case "tabs":
      return outlet === "main" ? (
        <>
          <h3>Tabs</h3>
          <Tabs defaultValue="HTML" tabs={accordianSections} />
        </>
      ) : (
        <TabsInfo />
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

async function mockFetch(_url: string, _options: any): Promise<any> {
  return new Promise((resolve, _reject) => {
    resolve({
      ok: true,
    });
  });
}

function mockFetchFail(_url: string, _options: any): Promise<any> {
  return new Promise((_resolve, reject) => {
    setTimeout(() => {
      reject({
        error: "Something went wrong, try again!",
      });
    }, 1000);
  });
}
