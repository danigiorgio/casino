import { Link } from 'react-router-dom';

import Button from '@/components/Button';
import GameLauncher from '@/components/GameLauncher';

import './PlayView.css';

const PlayView = () => {
  return (
    <div className="ui grid centered game">
      <div className="three wide column btn">
        <Link to="/">
          <Button type="button" className="secondary right floated">
            <i className="left chevron icon"></i>
            Back
          </Button>
        </Link>
      </div>
      <div className="ten wide column">
        <GameLauncher />
      </div>
      <div className="three wide column"></div>
    </div>
  );
};

export default PlayView;
