import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import logo from "./github-mark.svg";

export default function LikeButtonInfo() {
  return (
    <div className="prose">
      <a href="https://github.com/ruanha/react-components/tree/main/src/components/like-button">
        <img
          src={logo}
          style={{ width: "1rem" }}
          className="github-logo"
          alt="github logo"
        />{" "}
        Like Button code
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
  id: "like-button",
  title: "Like Button",
  description:
    "A simple like button component that takes in a url and a requestApi function and displays a like button.",
  requirements: [
    "It should be possible to set the url, liked status, and requestApi function.",
    "The requestApi function should be called with the url and the liked status when the button is clicked.",
    "By default the button should be unliked.",
    "It should be possible to like and unlike the button.",
    "It should be visually clear if the request is pending.",
    "It should be visually clear if the request has failed.",
  ],
};

const codeExample_1 = `/* Example of use of like-button component */
<LikeButton url="mock/api/like" requestApi={mockFetch} />`;
