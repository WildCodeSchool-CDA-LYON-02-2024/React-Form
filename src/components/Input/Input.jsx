import PropTypes from "prop-types";
import "./Input.css";

function Input({ type, name, placeholder, value, onChange, ...restProps }) {
  const handleInputChange = (event) => {
    if (onChange) {
      onChange(event);
    }
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleBlur = (event) => {
    const inputValue = event.target.value;
    let isValid = true;
    if (type === "password") {
      isValid = validatePassword(inputValue);
    } else if (type === "email") {
      isValid = validateEmail(inputValue);
    }
    if (!isValid) {
      console.log(`Please enter a valid ${type}.`);
    }
  };

  return (
    <div {...restProps}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        onBlur={handleBlur}
        {...restProps}
      />
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.oneOf(["text", "password", "email"]).isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
