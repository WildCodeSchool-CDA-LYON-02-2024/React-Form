import PropTypes from "prop-types";

import "./FormCustom.css";

function Form({ children, ...restProps }) {
  return (
    <div className="form-container">
      <form {...restProps}>{children}</form>
    </div>
  );
}
Form.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};
export default Form;
