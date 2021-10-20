import React from "react";
import { render } from "@testing-library/react";
import { Article } from "./Article";

describe("components/Article", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should render", () => {
    const { container } = render(
      <Article figCaption={"figcaption"}>
        <p>content</p>
      </Article>
    );

    // const el = container.querySelector("article");
    // console.log(prettyDOM(el));

    expect(container).toBeInTheDocument();
    expect(container).toHaveTextContent("figcaption");
    expect(container).toHaveTextContent("content");
  });
});
