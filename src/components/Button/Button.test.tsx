import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Button } from "./Button";

describe("components/Button", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should render", () => {
    const { container } = render(
      <Button>
        <p>content</p>
      </Button>
    );

    // const el = container.querySelector("button");
    // console.log(prettyDOM(el));

    expect(container).toBeInTheDocument();
    expect(container).toHaveTextContent("content");
  });

  test("should render with a className equal to the variant", () => {
    const { container } = render(
      <Button variant="primary">
        <p>content</p>
      </Button>
    );

    expect(container.firstChild).toHaveClass("Button btn btn-primary");
  });

  test("should render with a className", () => {
    const { container } = render(
      <Button className="new-class">
        <p>content</p>
      </Button>
    );

    expect(container.firstChild).toHaveClass("new-class");
  });

  test("should clicking the button calls event handler once", () => {
    const mockHandler = jest.fn();
    const { container } = render(
      <Button variant="primary" onClick={mockHandler}>
        <p>content</p>
      </Button>
    );
    const button = container.querySelector("button");

    if (!button) throw new Error("The element #button wasn't found");

    fireEvent.click(button);

    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
