import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import envs from '../config/env';

let headers = {};

const axiosInstance = Axios.create({
  baseURL: envs.DEV_BACKEND_URL,
  headers,
});

axiosInstance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    // console.log(envs.DEV_BACKEND_URL);

    return config;
  },
  errors => {
    Promise.reject(errors);
  },
);

export default axiosInstance;
