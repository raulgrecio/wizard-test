import React, { FC } from "react";
import classNames from "classnames";

import "./Button.scss";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "default" | "primary" | "secondary";
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  variant = "default",
  ...rest
}) => {
  return (
    <button
      className={classNames("Button btn", className, {
        "btn-light": variant === "default",
        "btn-primary": variant === "primary",
        "btn-secondary": variant === "secondary",
      })}
      {...rest}
    >
      {children}
    </button>
  );
};
