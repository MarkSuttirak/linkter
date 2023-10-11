import axios from 'axios';
import { getToken } from '../utils/helper';

const api = axios.create({
    baseURL: `https://${import.meta.env.ERP_URL}api`,
});

api.interceptors.request.use(
    async (config) => {
        config.headers['Authorization'] = `token ${getToken()}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;