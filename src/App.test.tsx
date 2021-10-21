import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// NOTE: SAMPLE
// jest.mock("react-i18next", () => ({
//   useTranslation: () => ({ t: (key: any) => key }),
//   Trans: ({ children }: any) => children,
// }));

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/welcome/i);
  expect(linkElement).toBeInTheDocument();
});
