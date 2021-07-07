import AsyncStorage from "@react-native-async-storage/async-storage";
import Axios from "axios";
import envs from "../config/env";

let headers = {};

const axiosInstance = Axios.create({
  baseURL: envs.DEV_BACKEND_URL,
  headers,
});

axiosInstance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem("token");
    // console.log('Token :>>');

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

axiosInstance.interceptors.response.use(
  response =>
    new Promise((resolve, reject) => {
      resolve(response);
    }),
  error => {
    if (!error.response) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }

    if (error.response.status === 403) {
      navigate(LOGOUT, {tokenExpired: true});
    } else {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  },
);

export default axiosInstance;
