import axios, { AxiosRequestConfig } from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const Url = {
  GET_PRODUCT_LIST: '/products',
  GET_CART: '/cart',
  ADD_TO_CART: '/cart',
  DELETE_ITEM_CART: (id: string) => `/cart/${encodeURIComponent(id)}`,
};

export const productAPI = {
  get: (config?: AxiosRequestConfig) =>
    instance.get(Url.GET_PRODUCT_LIST, config),
};

export const cartAPI = {
  get: (config?: AxiosRequestConfig) => instance.get(Url.GET_CART, config),
  add: (data: CartItem, config?: AxiosRequestConfig) =>
    instance.post(Url.ADD_TO_CART, data, config),
  delete: (id: string, config?: AxiosRequestConfig) =>
    instance.delete(Url.DELETE_ITEM_CART(id)),
};
