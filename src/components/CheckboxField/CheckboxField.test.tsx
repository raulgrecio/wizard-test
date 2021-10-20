import React from "react";
import { fireEvent, render } from "@testing-library/react";

import { CheckboxField } from "./CheckboxField";

describe("components/CheckboxField", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should render", () => {
    const { container } = render(<CheckboxField name={"ref-name"} />);

    const input = container.querySelector("input");
    const label = container.querySelector("label");

    // const el = container.querySelector("div");
    // console.log(prettyDOM(el));

    expect(input).toBeInTheDocument();
    expect(input?.getAttribute("name")).toBe("ref-name");
    expect(label?.getAttribute("for")).toBe("ref-name");
  });

  test("should clicking the checkbox and the label calls event handler twice", async () => {
    const mockHandler = jest.fn();

    const { container } = render(
      <CheckboxField name={"ref-name"} {...{ onChange: mockHandler }} />
    );
    const checkbox = container.querySelector("input");
    const label = container.querySelector("label");

    if (!checkbox) throw new Error("The element #checkbox wasn't found");
    if (!label) throw new Error("The element #label wasn't found");

    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    fireEvent.click(label);
    expect(checkbox).not.toBeChecked();

    expect(mockHandler).toHaveBeenCalledTimes(2);
  });
});
