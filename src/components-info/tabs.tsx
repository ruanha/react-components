import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import logo from "./github-mark.svg";

export default function TabsInfo() {
  return (
    <div className="prose">
      <a href="https://github.com/ruanha/react-components/tree/main/src/components/tabs">
        <img
          src={logo}
          style={{ width: "1rem" }}
          className="github-logo"
          alt="github logo"
        />{" "}
        Tabs code
      </a>
      <h3>Requirements</h3>
      {
        <ul>
          {info.requirements.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul>
      }
      <h3>Use</h3>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
        customStyle={{ fontSize: "0.7rem" }}
      >
        {codeExample_1}
      </SyntaxHighlighter>
    </div>
  );
}

const info = {
  id: "tabs",
  title: "tabs",
  description:
    "A simple tabs component that takes in an array of sections and displays them as tab menu.",
  requirements: [
    "The first tab should be active by default.",
    "It should be possible to set the title and text of each section.",
    "It should be possible switch between tabs.",
  ],
};

const codeExample_1 = `/* Example of use of tab component */
<Tab sections={[
  {title: "item 1", text: "text 1"},
  {title: "item 2", text: "text 2"}
]} />`;
