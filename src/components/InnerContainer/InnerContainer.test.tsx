import React from "react";
import { render } from "@testing-library/react";
import { InnerContainer } from "./InnerContainer";

describe("components/InnerContainer", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const setup = () =>
    render(
      <InnerContainer>
        <p>content</p>
      </InnerContainer>
    );

  test("should render", () => {
    const { container } = setup();

    // const el = container.querySelector("div");
    // console.log(prettyDOM(el));

    expect(container).toBeInTheDocument();
    expect(container).toHaveTextContent("content");
  });

  test("should render with a className", () => {
    const { container } = setup();

    expect(container.firstChild).toHaveClass("InnerContainer");
  });
});
