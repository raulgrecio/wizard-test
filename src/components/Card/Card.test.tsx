import React from "react";
import { render } from "@testing-library/react";

import { Card } from "./Card";

describe("components/Card", () => {
  const setup = () =>
    render(
      <Card>
        <p>content</p>
      </Card>
    );

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should render", () => {
    const { container } = setup();

    // const el = container.querySelector("main");
    // console.log(prettyDOM(el));

    expect(container).toBeInTheDocument();
    expect(container).toHaveTextContent("content");
  });

  test("should render with a className", () => {
    const { container } = setup();

    expect(container.firstChild).toHaveClass("Card shadow-sm rounded");
  });
});
