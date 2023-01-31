import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LikeButton from "./like-button";

const url = "/mock/api/like";

// afterEach function runs after each test suite is executed
afterEach(() => {
  cleanup();
});

test("renders Like button in unliked state as default", () => {
  render(<LikeButton url={url} requestApi={mockFetch} />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toHaveTextContent(/^Like$/);
  expect(buttonElement).not.toHaveTextContent(/^Liked$/);
});

test("renders a Liked button when fetch is successful", async () => {
  // arrange
  render(<LikeButton url={url} requestApi={mockFetch} />);
  const buttonElement = screen.getByRole("button");

  // act
  await userEvent.click(buttonElement);

  // assert
  await waitFor(() => expect(buttonElement).toHaveTextContent(/^Liked$/));
});

test("Like button toggles between Like and Liked", async () => {
  // arrange
  render(<LikeButton url={url} requestApi={mockFetch} />);
  const buttonElement = screen.getByRole("button");

  // act
  await userEvent.click(buttonElement);
  await userEvent.click(buttonElement);

  // assert
  expect.assertions(2);
  await waitFor(() => expect(buttonElement).toHaveTextContent(/^Like$/));
  expect(buttonElement).not.toHaveTextContent(/^Liked$/);
});

async function mockFetch(_url: string, _options: any): Promise<any> {
  return new Promise((resolve, _reject) => {
    resolve({
      ok: true,
    });
  });
}
