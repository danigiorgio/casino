import PropTypes from 'prop-types';

const Error = ({ children }) => {
  return (
    <div className="ui error message">
      <p className="header">{children}</p>
    </div>
  );
};

Error.propTypes = {
  children: PropTypes.node,
};

export default Error;
