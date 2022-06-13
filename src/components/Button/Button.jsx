import PropTypes from 'prop-types';

const Button = ({ className, type, value, onClick, children }) => {
  return (
    <button className={`ui button ${className}`} type={type} value={value} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
