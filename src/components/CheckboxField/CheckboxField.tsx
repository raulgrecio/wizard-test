import React, { forwardRef } from "react";
import { FieldError } from "react-hook-form";

import "./CheckboxField.scss";

interface CheckboxFieldProps {
  label?: string;
  name: string;
  error?: FieldError;
}

export const CheckboxField = forwardRef<HTMLInputElement, CheckboxFieldProps>(
  (props, inputRef) => {
    const { label, name, error, ...rest } = props;

    return (
      <div className="CheckboxField form-check">
        <input
          className="form-check-input"
          type="checkbox"
          ref={inputRef}
          name={name}
          id={name}
          {...rest}
        />
        <label className="form-check-label" htmlFor={name}>
          {label}
        </label>
        {error?.message && <div className="error">{error?.message}</div>}
      </div>
    );
  }
);
