import PropTypes from 'prop-types';

import GameItem from '@/components/GameItem';
import Spinner from '@/components/Spinner';

const GamesList = ({ isLoading, isError, filteredGames }) => {
  if (isLoading) {
    return <Spinner text="Loading..." />;
  }

  if (isError) {
    return <div className="ui message">There was an error fetching the data.</div>;
  }

  return filteredGames?.length ? (
    <>
      <h2 className="ui dividing header">Games</h2>
      <div className="ui relaxed divided items">
        <GameItem filteredGames={filteredGames} />
      </div>
    </>
  ) : (
    <div className="ui message">
      <div className="header">No results found.</div>
    </div>
  );
};

GamesList.propTypes = {
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  filteredGames: PropTypes.array,
};

export default GamesList;
