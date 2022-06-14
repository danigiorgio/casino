import PropTypes from 'prop-types';

import Input from '@/components/Input';

import './SearchBar.css';

const SearchBar = ({ className, value, handleOnChange }) => {
  return (
    <div className="four wide column">
      <div className={`ui small icon input ${className}`}>
        <Input type="text" placeholder="Search Game" value={value} onChange={handleOnChange} />
        <i className="search icon"></i>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  handleOnChange: PropTypes.func,
};

export default SearchBar;
