import { render, screen } from "@testing-library/react";

import ProgressBar from "./progress-bar";

describe("Rendering", () => {
  it("renders a progress bar with 0% width", () => {
    render(<ProgressBar />);
    const progress = screen.getByText("0%");
    expect(progress).toBeInTheDocument();
  });
  it("renders a progress bar with 50% width", () => {
    render(<ProgressBar percent={50} />);
    const progress = screen.getByText("50%");
    expect(progress).toBeInTheDocument();
  });
  it("renders a progress bar with 100% width", () => {
    render(<ProgressBar percent={100} />);
    const progress = screen.getByText("100%");
    expect(progress).toBeInTheDocument();
  });
  it("renders a progress bar with 5% when percent is 50.5", () => {
    render(<ProgressBar percent={50.4} />);
    const progress = screen.getByText("50%");
    expect(progress).toBeInTheDocument();
  });
  it("renders a progress bar with 51% when percent is 50.5", () => {
    render(<ProgressBar percent={50.5} />);
    const progress = screen.getByText("51%");
    expect(progress).toBeInTheDocument();
  });
});

describe("Edge cases for percent prop", () => {
  it("renders a progress bar with 0% width when percent is negative", () => {
    render(<ProgressBar percent={-1} />);
    const progress = screen.getByText("0%");
    expect(progress).toBeInTheDocument();
  });
  it("renders a progress bar with 100% width when percent is greater than 100", () => {
    render(<ProgressBar percent={101} />);
    const progress = screen.getByText("100%");
    expect(progress).toBeInTheDocument();
  });
  it("renders a progress bar with 100% when percent is Infinity", () => {
    render(<ProgressBar percent={Infinity} />);
    const progress = screen.getByText("100%");
    expect(progress).toBeInTheDocument();
  });
  it("renders a progress bar with 0% when percent is -Infinity", () => {
    render(<ProgressBar percent={-Infinity} />);
    const progress = screen.getByText("0%");
    expect(progress).toBeInTheDocument();
  });
  it("renders a progress bar with 0% when percent is NaN", () => {
    render(<ProgressBar percent={NaN} />);
    const progress = screen.getByText("0%");
    expect(progress).toBeInTheDocument();
  });
  it("renders a progress bar with 0% when percent is undefined", () => {
    render(<ProgressBar percent={undefined} />);
    const progress = screen.getByText("0%");
    expect(progress).toBeInTheDocument();
  });
  it("renders a progress bar with 100% when percent is a large integer", () => {
    render(<ProgressBar percent={Number.MAX_SAFE_INTEGER + 1} />);
    const progress = screen.getByText("100%");
    expect(progress).toBeInTheDocument();
  });
});
