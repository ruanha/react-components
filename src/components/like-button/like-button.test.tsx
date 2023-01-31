import { render, screen } from "@testing-library/react";
import LikeButton from "./like-button";

const url = "/mock/api/like";

test("renders Like button in unliked state as default", () => {
  render(<LikeButton url={url} requestApi={mockFetch} />);
  const linkElement = screen.getByText(/Like/i);
  expect(linkElement).toBeInTheDocument();
});

function mockFetch(_url: string, _options: any): Promise<any> {
  return new Promise((resolve, reject) => {
    resolve({
      ok: true,
    });
  });
}
