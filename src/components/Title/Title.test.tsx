import React from "react";
import { render } from "@testing-library/react";
import { Title } from "./Title";

describe("components/Title", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should render", () => {
    const { container } = render(<Title text={"title"} />);

    // const el = container.querySelector("h3");
    // console.log(prettyDOM(el));

    expect(container).toBeInTheDocument();
    expect(container).toHaveTextContent("title");
  });
});
