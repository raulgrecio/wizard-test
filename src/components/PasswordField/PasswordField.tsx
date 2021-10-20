import React, { forwardRef, useState } from "react";
import { FieldError } from "react-hook-form";

import { EyeIcon, EyeOffIcon } from "..";

import "./PasswordField.scss";

interface PasswordFieldProps {
  label?: string;
  name: string;
  initialShow?: boolean;
  error?: FieldError;
}

export const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
  (props, inputRef) => {
    const { label, name, error, initialShow = false, ...rest } = props;
    const [show, setShow] = useState(initialShow);

    return (
      <div className="PasswordField mb-3">
        <label className="form-label" htmlFor={name}>
          {label}
        </label>
        <div className="input-group">
          <input
            className="form-control"
            type={show ? "text" : "password"}
            ref={inputRef}
            name={name}
            {...rest}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => setShow(!show)}
          >
            {show ? <EyeIcon width={16} /> : <EyeOffIcon width={16} />}
          </button>
        </div>
        {error?.message && <div className="error">{error?.message}</div>}
      </div>
    );
  }
);
