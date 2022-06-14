import { Link } from 'react-router-dom';

import Button from '@/components/Button';

const NotFound = () => {
  return (
    <div className="ui one column center aligned page grid">
      <div className="column twelve wide">
        <h1>404 - Not Found</h1>
        <Link to="/">
          <Button className="secondary" type="button">
            <i className="left chevron icon"></i>
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
