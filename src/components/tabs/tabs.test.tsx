import { render } from "@testing-library/react";

import Tabs from "./tabs";

describe("render", () => {
  it("renders", () => {
    render(<Tabs defaultValue="html" tabs={mockSections} />);
  });
});

const mockSections = [
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
