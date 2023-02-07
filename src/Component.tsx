import Accordion from "./components/accordion/accordion";
import ProgressBar from "./components/progress-bar/progress-bar";
import LikeButton from "./components/like-button/like-button";
import Tabs from "./components/tabs/tabs";
import ProgressBar2 from "./components/progress-bar-ii/progress-bar-ii";

export default function Component({ componentId }: { componentId: string }) {
  switch (componentId) {
    case "accordion":
      return <Accordion sections={accordianSections} />;

    case "progress-bar":
      return <ProgressBar percent={25} />;

    case "progress-bar-ii":
      return <ProgressBar2 />;

    case "like-button":
      return (
        <>
          <LikeButton url="mock/api/like" requestApi={mockFetch} />
          <LikeButton url="mock/api/like" requestApi={mockFetchFail} />
        </>
      );

    case "tabs":
      return <Tabs defaultValue="HTML" tabs={accordianSections} />;

    default:
      return <h1>NO COMPONENT SELECTED</h1>;
  }
}

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
