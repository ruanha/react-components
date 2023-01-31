import ProgressBar from "../components/progress-bar/progress-bar";

import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import logo from "./github-mark.svg";

export default function ProgressBarExample() {
  return (
    <div className="component-example">
      <a href="https://github.com/ruanha/react-components/tree/main/src/components/progress-bar">
        <img
          src={logo}
          style={{ width: "1rem" }}
          className="github-logo"
          alt="github logo"
        />{" "}
        Progress bar component
      </a>
      <h4>Default</h4>
      <p>
        If no style prop is used, the progress bar uses the defaults. If no
        percentage is used it defaults to 0%.
      </p>
      <ProgressBar percent={0} />
      <ProgressBar percent={1} />
      <ProgressBar percent={5} />
      <ProgressBar percent={25} />
      <ProgressBar percent={50} />
      <ProgressBar percent={100} />
      <div className="example-code">
        <SyntaxHighlighter
          language="javascript"
          style={dracula}
          customStyle={{ fontSize: "0.7rem" }}
        >
          {codeExample_1}
        </SyntaxHighlighter>
      </div>
      <h4>Style the progress bar</h4>
      <p>
        The style of the progress bar, text and container is configurable with
        the style prop.
      </p>
      <h5>Example 1: background</h5>
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
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
        customStyle={{ fontSize: "0.7rem" }}
      >
        {codeExample_2}
      </SyntaxHighlighter>
      <h5>Example 2: size of the bar</h5>
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
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
        customStyle={{ fontSize: "0.7rem" }}
      >
        {codeExample_3}
      </SyntaxHighlighter>
    </div>
  );
}

const codeExample_1 = `/* Examples of use of progress-bar component */
<ProgressBar percent={0} />
<ProgressBar percent={1} />
<ProgressBar percent={5} />
<ProgressBar percent={25} />
<ProgressBar percent={50} />
<ProgressBar percent={100} />`;

const codeExample_2 = `/* Examples of use of progress-bar component */
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
/>`;

const codeExample_3 = `/* Examples of use of progress-bar component */
<ProgressBar
  percent={33}
  style={{
    bar: {
      backgroundColor: "red",
      color: "red",
    },
    container: { border: "none", height: "5px" },
  }}
/>`;
