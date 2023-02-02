import { cleanup, render, screen } from "@testing-library/react";
import Accordion from "./accordion";

// afterEach function runs after each test suite is executed
afterEach(() => {
  cleanup();
});

describe("Accordion", () => {
  it("renders Accordion component", () => {
    render(<Accordion sections={accordianSections} />);
    const accordionElements = accordianSections.map((section) =>
      screen.getByText(section.title)
    );
    for (const accordionElement of accordionElements) {
      expect(accordionElement).toBeInTheDocument();
    }
  });
});

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
