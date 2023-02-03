import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

import logo from "./github-mark.svg";

export default function ProgressBar2Info() {
  return (
    <div className="prose">
      <a href="https://github.com/ruanha/react-components/tree/main/src/components/progress-bar-ii">
        <img
          src={logo}
          style={{ width: "1rem" }}
          className="github-logo"
          alt="github logo"
        />{" "}
        Progress bar 2 code
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
      <div className="example-code">
        <SyntaxHighlighter
          language="javascript"
          style={dracula}
          customStyle={{ fontSize: "0.7rem" }}
        >
          {codeExample_1}
        </SyntaxHighlighter>
      </div>
      <h3>Notes</h3>
      <p>
        The Progress Bar 2, simply uses the{" "}
        <a href="/react-components/progress-bar">Progress Bar</a> component, but
        adds a start button that will start the progress bar or reset to 0.
      </p>
    </div>
  );
}

const info = {
  id: "progress-bar-ii",
  title: "Progress Bar 2",
  description:
    "A Progress Bar component with a start button that will start the progress bar or reset to 0.",
  requirements: [
    "The progress bar should start at 0%.",
    "The progress bar should increase by 10% every second.",
    "The progress bar should stop at 100%.",
    "The progress bar should have a start button that will start the progress bar or reset to 0.",
  ],
};

const codeExample_1 = `/* Examples of use of progress-bar-ii component */
<ProgressBar2 />`;
