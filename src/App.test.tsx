import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders heading", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Tortoise and Hare/i);
  expect(linkElement).toBeInTheDocument();
});
