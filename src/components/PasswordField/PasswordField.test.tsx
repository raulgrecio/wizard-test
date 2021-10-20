import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { PasswordField } from "./PasswordField";

describe("components/PasswordField", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const mockHandler = jest.fn();

  const setup = () =>
    render(<PasswordField name={"ref-name"} {...{ onChange: mockHandler }} />);

  test("should render", () => {
    const { container } = setup();

    const input = container.querySelector("input");
    const label = container.querySelector("label");

    // const el = container.querySelector("div");
    // console.log(prettyDOM(el));

    expect(input).toBeInTheDocument();
    expect(input?.getAttribute("name")).toBe("ref-name");
    expect(label?.getAttribute("for")).toBe("ref-name");
  });

  test("should type", async () => {
    const { container } = setup();

    const input = container.querySelector("input");

    if (!input) throw new Error("The element #input wasn't found");

    userEvent.type(input, "Password");

    expect(input).toHaveValue("Password");
  });

  test("should switch between input or password type", async () => {
    const { container } = setup();

    const input = container.querySelector("input");
    const button = container.querySelector("button");
    const icon = () => button?.querySelector("svg");

    if (!input) throw new Error("The element #input wasn't found");
    if (!button) throw new Error("The element #button wasn't found");

    // initial
    userEvent.type(input, "Password");
    expect(input.getAttribute("type")).toBe("password");
    expect(icon()?.textContent).toBe("eye-off.svg");

    // second
    fireEvent.click(button);
    expect(input.getAttribute("type")).toBe("text");
    expect(icon()?.textContent).toBe("eye.svg");

    // third == initial
    fireEvent.click(button);
    expect(icon()?.textContent).toBe("eye-off.svg");
    expect(input.getAttribute("type")).toBe("password");
  });
});
