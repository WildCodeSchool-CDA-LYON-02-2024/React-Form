import PropTypes from "prop-types";
import "./Form.css";

export function Form({
  title,
  children,
  onSubmit,
  onError,
  className,
  ...restProps
}) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (onSubmit) {
        await onSubmit(event.target.elements);
      }
    } catch (error) {
      if (onError) {
        onError(error);
      } else {
        console.error("Form submission error:", error);
      }
    }
  };


  return (
    <form {...restProps} onSubmit={handleSubmit} className={className}>
      {title && <h2>{title}</h2>}
      {children}
    </form>
  );
}

Form.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onSubmit: PropTypes.func,
  onError: PropTypes.func,
  className: PropTypes.string,
};
