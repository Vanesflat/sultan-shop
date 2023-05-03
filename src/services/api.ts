import axios, { AxiosInstance } from 'axios';

const BACKEND_URL = 'https://6450a56ce1f6f1bb229ba624.mockapi.io';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  return api;
};
