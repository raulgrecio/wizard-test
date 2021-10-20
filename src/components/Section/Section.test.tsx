import React from "react";
import { render } from "@testing-library/react";
import { Section } from "./Section";

describe("components/Section", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should render", () => {
    const { container } = render(
      <Section title={"title"} description={"description"} />
    );

    // const el = container.querySelector("section");
    // console.log(prettyDOM(el));

    expect(container).toBeInTheDocument();
    expect(container).toHaveTextContent("title");
    expect(container).toHaveTextContent("description");
  });
});
