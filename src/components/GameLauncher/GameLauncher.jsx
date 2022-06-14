import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '@/lib/comeon.game-1.0.min.js';

const GameLauncher = () => {
  const { gameId } = useParams();

  useEffect(() => {
    window.comeon.game.launch(gameId);
  }, [gameId]);

  return (
    <div className="root">
      <h1 className="ui">{gameId.toUpperCase()}</h1>
      <div id="game-launch" />
    </div>
  );
};

export default GameLauncher;
