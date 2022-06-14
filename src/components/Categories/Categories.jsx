import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Categories.css';

const Categories = ({ categories, selected, setCategory }) => {
  const [active, setActive] = useState(selected);

  const handleCategory = (id) => {
    setActive(id);
    setCategory(id);
  };

  return (
    <aside className="four wide column">
      <h2 className="ui dividing header">Categories</h2>

      <div className="ui selection animated list items">
        {categories?.map(({ id, name }) => (
          <div className="item" key={id}>
            <div className="content">
              <h3 className={`${active === id ? 'active' : ''}`} onClick={() => handleCategory(id)}>
                {name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

Categories.propTypes = {
  categories: PropTypes.array,
  selected: PropTypes.number,
  setCategory: PropTypes.func,
  handleCategory: PropTypes.func,
};

export default Categories;
