import PropTypes from 'prop-types';

const Spinner = ({ text }) => {
  return (
    <div className="ui active inverted dimmer">
      <div className="ui text loader">{text}</div>
    </div>
  );
};

Spinner.propTypes = {
  text: PropTypes.string,
};

export default Spinner;
