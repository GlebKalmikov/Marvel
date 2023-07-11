import api from '../config/api';

const photoService = {
  getCurated: async function () {
    const data = await api.request('GET', 'v1/curated?api_key=per_page=1')

    return data;
  },
  searchPhoto: async function (query) {
    if (!query) {
      throw new Error('Empty query')
    }

    const data = await api.request('GET', `v1/search?query=${query}`);

    return data;
  },
  getPhoto: async(id) => {
    const data = await api.request('GET', `v1/photos/${id}`)

    return data;
  },
  deletePhoto: async(id) => {
    const data = await api.request('DELETE', `v1/photos/${id}`)

    return data;
  },
  createFoto: async(id) => {
    const data = await api.request('POST', `v1/photos/${id}`)
  
    return data;
  }
}



export default photoService;