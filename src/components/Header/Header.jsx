import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { getUser, getUsername } from '@/utils/storage';
import apiClient from '@/services/apiClient';

import UserProfile from '@/components/UserProfile';
import SearchBar from '@/components/SearchBar';
import Button from '@/components/Button';

const Header = ({ search, handleOnChange }) => {
  const navigate = useNavigate();

  const user = getUser();
  const username = getUsername();

  const { mutate: handleLogout } = useMutation(
    async () => {
      return await apiClient.post(`/logout`, { username: username });
    },
    {
      onSuccess: () => {
        localStorage.removeItem('username');
        localStorage.removeItem('user');
        navigate('/login');
      },
      onError: () => {
        throw new Error('Something wrong happened');
      },
    },
  );

  return (
    <>
      <header className="ui grid centered">
        <div className="twelve wide column">
          <UserProfile {...user} />
          <Link to="/login">
            <Button className="secondary left floated" type="button" value="Logout" onClick={handleLogout}>
              <i className="left chevron icon"></i>
              Log Out
            </Button>
          </Link>
        </div>
        <div className="four wide column">
          <SearchBar value={search} handleOnChange={handleOnChange} />
        </div>
      </header>
    </>
  );
};

Header.propTypes = {
  search: PropTypes.string,
  handleOnChange: PropTypes.func,
};

export default Header;
