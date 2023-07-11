import { API_KEY_PUBLIC, API_KEY_PRIVATE, API_URL } from '../constants'

const api = {
  baseURL: API_URL,
  request: async function (method, url) {
    try {
      const response = await fetch(`${this.baseURL}${url}`, {
        method: method,
        // headers: {
        //   Authorization: API_KEY_PUBLIC
        // }
      });
      const data = await response.json();

      return data;
    } catch (error) {
      console.log('error :>> ', error);
    }
  }
}

export default api;