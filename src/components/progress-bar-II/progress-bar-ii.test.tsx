import { act, render, screen } from "@testing-library/react";

import ProgressBar2 from "./progress-bar-ii";

describe("Rendering", () => {
  it("renders a progress bar with 0% width", () => {
    render(<ProgressBar2 />);
    const progress = screen.getByText("0%");
    expect(progress).toBeInTheDocument();
  });
  it("renders a start button", () => {
    render(<ProgressBar2 />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});

describe("Progress bar", () => {
  it("increases the progress bar by 1% every 50ms", () => {
    jest.useFakeTimers();
    render(<ProgressBar2 />);
    const button = screen.getByRole("button");
    act(() => {
      button.click();
    });
    expect(screen.getByText("0%")).toBeInTheDocument();
    act(() => {
      jest.advanceTimersByTime(50);
    });
    expect(screen.getByText(/^1%$/)).toBeInTheDocument();
    act(() => {
      jest.advanceTimersByTime(50);
    });
    expect(screen.getByText(/^2%$/)).toBeInTheDocument();
  });
  it("stops increasing the progress bar when it reaches 100%", () => {
    jest.useFakeTimers();
    render(<ProgressBar2 />);
    const button = screen.getByRole("button");
    act(() => {
      button.click();
    });
    act(() => {
      jest.advanceTimersByTime(5000);
    });
    expect(screen.getByText("100%")).toBeInTheDocument();
    act(() => {
      jest.advanceTimersByTime(50);
    });
    expect(screen.getByText("100%")).toBeInTheDocument();
  });
});
