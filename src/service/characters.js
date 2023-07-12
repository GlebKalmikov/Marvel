import api from '../config/api';
import { API_KEY_PUBLIC, API_KEY_PRIVATE } from '../constants'

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


const charactersService = {
  getAll: async function () {
    const data = await api.request('GET', 'v1/public/characters' + getParams()) 

    return data;
  },
  getCharacter: async(id) => {
    const data = await api.request('GET', `/v1/public/characters/${id}${getParams()}`)

    return data;
  },
}



export default charactersService;