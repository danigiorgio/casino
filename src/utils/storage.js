const setUser = (user) => localStorage.setItem('user', JSON.stringify(user));

const getUser = () => {
  const user = localStorage.getItem('user');

  return user ? JSON.parse(user) : null;
};

const getUsername = () => localStorage.getItem('username');

export { setUser, getUser, getUsername };
