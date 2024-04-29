import PropTypes from "prop-types";
import { useState } from "react";
import "./Input.css";

export function Input({
  label,
  errorMessage,
  pattern,
  required,
  ...restProps
}) {
  const [focused, setFocused] = useState(false);
  const handleFocus = () => {
    setFocused(true);
  };
  return (
    <div>
      <label>{label}</label>
      <input
        {...restProps}
        onBlur={handleFocus}
        onFocus={() =>
          restProps.name === "Confirm password" && setFocused(true)
        }
        // eslint-disable-next-line react/no-unknown-property
        focused={focused.toString()}
        required={required}
        pattern={pattern}
      />
      <span>{errorMessage}</span>
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  pattern: PropTypes.string,
  required: PropTypes.bool,
};
