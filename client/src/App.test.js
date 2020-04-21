import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

it("renders without crashing", () => {
  render(<App />);
});

test("Player name and info renders to screen", () => {
  const { getByTestId } = render(<App />);
  getByTestId(/players-info/i);
});
