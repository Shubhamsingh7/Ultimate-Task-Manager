import React, { HTMLInputTypeAttribute } from "react";
import { Controller } from "react-hook-form";

interface InputI {
  placeholder: string;
  id?: string;
  name: string;
  labelText?: string;
  error?: string;
  control: any;
  type?: HTMLInputTypeAttribute;
  isTextArea?: boolean;
}
function TextInput(props: InputI) {
  const {
    id,
    labelText,
    name,
    placeholder,
    error,
    control,
    type = "text",
    isTextArea,
  } = props;
  return (
    <div className="input-container">
      <label htmlFor={name} className="input-label">
        {labelText}
      </label>
      <br />
      <Controller
        name={name}
        control={control}
        render={({ field }) =>
          !isTextArea ? (
            <input
              id={id}
              type={type}
              placeholder={placeholder}
              className="input"
              aria-invalid={error ? "true" : "false"}
              {...field}
            />
          ) : (
            <textarea
              rows={8}
              cols={50}
              className="input"
              placeholder={placeholder}
              {...field}
            ></textarea>
          )
        }
      />
      <br />
      {error && (
        <span role="alert" className="error-message">
          {error}
        </span>
      )}
    </div>
  );
}

export default TextInput;
