import React, { forwardRef } from "react";
import { FieldError } from "react-hook-form";

import "./InputField.scss";

interface InputFieldProps {
  label?: string;
  name: string;
  error?: FieldError;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (props, inputRef) => {
    const { label, name, error, ...rest } = props;

    return (
      <div className="InputField mb-3">
        <label className="form-label" htmlFor={name}>
          {label}
        </label>
        <input
          className="form-control"
          type="text"
          ref={inputRef}
          name={name}
          {...rest}
        />
        {error?.message && <div className="error">{error?.message}</div>}
      </div>
    );
  }
);
