import axios from 'axios';
import { BASE_URL } from './constants';

export function fetchGames() {
  const url = `${BASE_URL}/games`;

  return axios
    .get(url, { method: 'get' })
    .then((res) => res.data)
    .catch((err) => err);
}

export default { fetchGames };
