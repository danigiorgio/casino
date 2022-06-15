import axios from 'axios';
import { BASE_URL } from './constants';

export function fetchCategories() {
  const url = `${BASE_URL}/categories`;

  return axios
    .get(url, { method: 'get' })
    .then((res) => res.data)
    .catch(() => {
      throw new Error('Something went wrong');
    });
}

export default { fetchCategories };
