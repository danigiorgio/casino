import PropTypes from 'prop-types';

const Input = ({ type, name, placeholder, autoFocus, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      autoFocus={autoFocus}
      onChange={onChange}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  autoFocus: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Input;
