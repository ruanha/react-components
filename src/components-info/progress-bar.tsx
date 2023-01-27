export default function ProgressBarInfo() {
  return (
    <div className="prose">
      <h2>Requirements</h2>
      {
        <ul>
          {info.requirements.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul>
      }
      <h2>Notes</h2>
      <h3>HTML &lt;progress&gt; tag</h3>
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
