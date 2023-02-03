import { render, screen } from "@testing-library/react";

import ProgressBar2 from "./progress-bar-ii";

describe("Rendering", () => {
  it("renders a progress bar with 0% width", () => {
    render(<ProgressBar2 />);
    const progress = screen.getByText("0%");
    expect(progress).toBeInTheDocument();
  });
});
