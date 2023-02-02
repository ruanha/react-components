import { useState } from "react";

export default function Tabs({
  defaultValue,
  tabs,
}: {
  defaultValue: string;
  tabs: tab[];
}) {
  const [activeTabId, setActiveTabId] = useState(defaultValue || tabs[0].title);

  return (
    <div className="tabs">
      <div>
        {tabs.map((tab) => (
          <button
            id={tab.title}
            className={activeTabId === tab.title ? "active" : ""}
            key={tab.title}
            onClick={() => setActiveTabId(tab.title)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div>{ensure(tabs.find((tab) => tab.title === activeTabId)).text}</div>
    </div>
  );
}

type tab = {
  title: string;
  text: string;
};

function ensure<T>(
  argument: T | undefined | null,
  message: string = "This value was promised to be there."
): T {
  if (argument === undefined || argument === null) {
    throw new TypeError(message);
  }

  return argument;
}
