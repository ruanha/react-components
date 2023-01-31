import { useState } from "react";

import "./accordion.css";

function Section({ title, text }: section) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item" key={title}>
      <div
        className="accordion-item-title"
        onClick={() => setIsActive(!isActive)}
      >
        {title}{" "}
        <span
          aria-hidden={true}
          className={`accordion-icon ${isActive && "accordion-icon--rotated"}`}
        />
      </div>
      <div className="accordion-item-contents">{isActive && text}</div>
    </div>
  );
}

export default function Accordion({ sections }: { sections: section[] }) {
  return (
    <div className="accordion">
      {sections.map((section) => {
        return <Section title={section.title} text={section.text} />;
      })}
    </div>
  );
}

type section = {
  title: string;
  text: string;
};
