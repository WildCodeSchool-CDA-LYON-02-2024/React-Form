import PropTypes from "prop-types";
import "./Input.css";

function Input({ children, ...restProps }) {
  return (
    <div className="form__group field">
      <input {...restProps} />
      <label className="form__label">{children}</label>
    </div>
  );
}

Input.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Input;
