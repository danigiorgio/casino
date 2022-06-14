const setUser = (user) => localStorage.setItem('user', JSON.stringify(user));

const getUser = () => {
  const user = localStorage.getItem('user');

  return user ? JSON.parse(user) : null;
};

const getUsername = () => localStorage.getItem('username');

const removeUser = () => {
  localStorage.removeItem('username');
  localStorage.removeItem('user');
};

export { setUser, getUser, getUsername, removeUser };
