import { useState } from "react";

import classes from "./accordion.module.css";

function Section({ title, text }: section) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={classes["accordion-item"]}>
      <div
        className={classes["accordion-item-title"]}
        onClick={() => setIsActive(!isActive)}
      >
        {title}{" "}
        <span
          aria-hidden={true}
          className={`${classes["accordion-icon"]} ${
            isActive && classes["accordion-icon--rotated"]
          }`}
        />
      </div>
      <div className={classes["accordion-item-contents"]}>
        {isActive && text}
      </div>
    </div>
  );
}

export default function Accordion({ sections }: { sections: section[] }) {
  return (
    <div className={classes["accordion"]}>
      {sections.map((section) => {
        return (
          <Section
            title={section.title}
            text={section.text}
            key={section.title}
          />
        );
      })}
    </div>
  );
}

type section = {
  title: string;
  text: string;
};
