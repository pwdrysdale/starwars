import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
    baseURL: 'https://swapi.dev/api/',
    timeout: 10000,
});

api.interceptors.request.use(config => {
    console.log(config.method?.toUpperCase(), config.url);
    return config;
});

api.interceptors.response.use(response => {
    if (response.status < 200 || response.status >= 300) {
        console.error('Error response from SWAPI:', response);
    }
    return response;
});

export default api;
