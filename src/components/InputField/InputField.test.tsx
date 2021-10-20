import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { InputField } from "./InputField";

describe("components/InputField", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const mockHandler = jest.fn();
  const setup = () =>
    render(<InputField name={"ref-name"} {...{ onChange: mockHandler }} />);

  test("should render", () => {
    const { container } = setup();

    const input = container.querySelector("input");
    const label = container.querySelector("label");

    // const el = container.querySelector("div");
    // console.log(prettyDOM(el));

    if (!input) throw new Error("The element #input wasn't found");
    if (!label) throw new Error("The element #label wasn't found");

    expect(input).toBeInTheDocument();
    expect(input.getAttribute("name")).toBe("ref-name");
    expect(label.getAttribute("for")).toBe("ref-name");
  });

  test("should type", async () => {
    const { container } = setup();

    const input = container.querySelector("input");

    if (!input) throw new Error("The element #input wasn't found");

    userEvent.type(input, "This is component, input!");

    expect(input).toHaveValue("This is component, input!");
  });
});
