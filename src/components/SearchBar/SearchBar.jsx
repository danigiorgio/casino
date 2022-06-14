import PropTypes from 'prop-types';

import Input from '@/components/Input';

const SearchBar = ({ value, handleOnChange }) => {
  return (
    <div className="four wide column">
      <div className="ui small icon input">
        <Input type="text" placeholder="Search Game" value={value} onChange={handleOnChange} />
        <i className="search icon"></i>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string,
  handleOnChange: PropTypes.func,
};

export default SearchBar;
