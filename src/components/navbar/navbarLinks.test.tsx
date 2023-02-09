import { cleanup, render, screen } from "@testing-library/react";
import NavbarLinks from "./NavbarLinks";
import { BrowserRouter } from "react-router-dom";

// afterEach function runs after each test suite is executed
afterEach(() => {
  cleanup();
});

describe("Navbar", () => {
  it("renders NavbarLinks component", () => {
    render(
      <BrowserRouter>
        <NavbarLinks items={items} />
      </BrowserRouter>
    );
    const navbarItems = items.map((item) => screen.getByText(item.title));
    for (const navbarItem of navbarItems) {
      expect(navbarItem).toBeInTheDocument();
    }
  });
});

const items = [
  { title: "home", link: "#" },
  { title: "contact", link: "#" },
  { title: "about", link: "#" },
];
