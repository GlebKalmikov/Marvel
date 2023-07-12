import api from '../config/api';
import { API_KEY_PUBLIC, API_KEY_PRIVATE, API_URL } from '../constants'

import md5 from 'md5'

const getParams = () => {

  const ts = Date.now();

  const params = new URLSearchParams({
    ts: ts,
    apikey: API_KEY_PUBLIC,
    hash: md5(ts + API_KEY_PRIVATE + API_KEY_PUBLIC), // Generate hash for authentication
  });

  return `?${params}`
}


const comicsService = {
  getAll: async function () {
    const data = await api.request('GET', 'v1/public/comics' + getParams()) 

    return data;
  },
  searchComics: async function (query) {
    if (!query) {
      throw new Error('Empty query')
    }

    const data = await api.request('GET', `v1/public/comics${getParams()}&title=${query}`);

    return data;
  },
  getComic: async(id) => {
    const data = await api.request('GET', `/v1/public/comics/${id}${getParams()}`)

    return data;
  },
}



export default comicsService;