import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from '@/components/Button';

const GameItem = ({ filteredGames }) => {
  return (
    <>
      {filteredGames?.map(({ code, icon, name, description }) => (
        <section className="game item" key={name}>
          <div className="ui small image">
            <img src={icon} alt={name} />
          </div>
          <div className="content">
            <h3 className="ui header">{name}</h3>
            <p className="description">{description}</p>
            <div className="extra">
              <Link to={`/play/${code}`}>
                <Button type="button" className="secondary right floated">
                  Play
                  <i className="right chevron icon"></i>
                </Button>
              </Link>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

GameItem.propTypes = {
  filteredGames: PropTypes.array,
};

export default GameItem;
