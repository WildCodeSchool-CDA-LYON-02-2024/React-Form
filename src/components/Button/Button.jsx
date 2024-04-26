import PropTypes from "prop-types";
import "./Button.css";

export function Button({ children, ...restProps }) {
  return <button {...restProps}>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
