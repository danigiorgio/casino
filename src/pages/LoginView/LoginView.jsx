import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { setUser } from '@/utils/storage';
import { capitalize } from '@/utils/misc';
import apiClient from '@/services/apiClient';

import Input from '@/components/Input';
import Button from '@/components/Button';

const LoginView = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { mutate: login } = useMutation(
    async () => {
      return await apiClient.post(`/login`, {
        username,
        password,
      });
    },
    {
      onSuccess: (res) => {
        const { player } = res.data;
        localStorage.setItem('username', username);
        setUser(player);
        navigate('/');
      },
      onError: ({ response: { data } }) => {
        setError(data.error);
      },
    },
  );

  const handleLogin = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <div className="ui grid centered">
      <form>
        <div className="fields">
          <div className="required field">
            <div className="ui icon input">
              <Input
                type="text"
                name="username"
                placeholder="Username"
                autoFocus
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                value={username}
              />
              <i className="user icon"></i>
            </div>
          </div>
          <div className="required field">
            <div className="ui icon input">
              <Input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
              />
              <i className="lock icon"></i>
            </div>
          </div>
          <div className="field">
            <div className="ui icon input">
              <Button className="secondary right floated" type="button" value="Login" onClick={handleLogin}>
                Log In
                <i className="right chevron icon"></i>
              </Button>
            </div>
          </div>
          {error && (
            <div className="ui error message">
              <div className="header">{capitalize(error)}.</div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginView;
