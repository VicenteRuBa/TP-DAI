import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.spooncular.com/food',
    params: { apiKey: ''}
})
export default api;