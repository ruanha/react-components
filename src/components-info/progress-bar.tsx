import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function ProgressBarInfo() {
  return (
    <div className="prose">
      <h3>Requirements</h3>
      {
        <ul>
          {info.requirements.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul>
      }
      <h3>Use</h3>
      <h4>Default style</h4>
      <div className="example-code">
        <SyntaxHighlighter
          language="javascript"
          style={dracula}
          customStyle={{ fontSize: "0.7rem" }}
        >
          {codeExample_1}
        </SyntaxHighlighter>
      </div>
      <h4>Custom style examples</h4>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
        customStyle={{ fontSize: "0.7rem" }}
      >
        {codeExample_2}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
        customStyle={{ fontSize: "0.7rem" }}
      >
        {codeExample_3}
      </SyntaxHighlighter>
      <h3>Notes</h3>
      <h4>HTML &lt;progress&gt; tag</h4>
      <p>
        fun fact, the html standard has a tag for a{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress">
          progress
        </a>{" "}
        bar.
      </p>
    </div>
  );
}

const info = {
  id: "progress-bar",
  title: "Progress Bar",
  description:
    "A Progress Bar component that takes in a percentage and displays a progress bar with the percentage.",
  requirements: [
    "It is possible to change the style of the progress bar, text and the progress bar background container.",
    "The component accepts a progress prop in percentage that will determine the width of the progress bar.",
    "The component displays the percentage in the center of the progress bar.",
  ],
};

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
        "repeating-linear-gradient(45deg, 
          #606dbc, 
          #606dbc 
          10px, 
          #465298 
          10px,
          #465298 20px)",
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
