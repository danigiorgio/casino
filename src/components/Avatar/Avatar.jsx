import PropTypes from 'prop-types';

const Avatar = ({ src, alt }) => {
  return <img className="ui avatar image" src={src} alt={alt} />;
};

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Avatar;
