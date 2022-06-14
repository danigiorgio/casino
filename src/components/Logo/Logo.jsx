import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="ui one column center aligned page grid">
      <div className="column twelve wide">
        <Link to="/">
          <img src="/images/logo.svg" alt="logo" />
        </Link>
      </div>
    </div>
  );
};

export default Logo;
