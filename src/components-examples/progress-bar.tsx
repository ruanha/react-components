import ProgressBar from "../components/progress-bar/progress-bar";

import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function ProgressBarExample() {
  return (
    <div className="component-example">
      <h4>Default</h4>
      <p>
        If no style prop is used, the progress bar uses the defaults. If no
        percentage is used it defaults to 0%.
      </p>
      <SyntaxHighlighter language="javascript" style={dracula}>
        {`
                import ProgressBar from "./portfolio/progress_bar/progress-bar";
                <ProgressBar percent={0} />`}
      </SyntaxHighlighter>
      <ProgressBar percent={0} />
      <ProgressBar percent={1} />
      <ProgressBar percent={5} />
      <ProgressBar percent={25} />
      <ProgressBar percent={50} />
      <ProgressBar percent={100} />
      <h4>Style the progress bar</h4>
      <p>
        The style of the progress bar, text and container is configurable with
        the style prop.
      </p>
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
    </div>
  );
}
