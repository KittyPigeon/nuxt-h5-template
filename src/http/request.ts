import axios, { InternalAxiosRequestConfig, AxiosResponse } from "axios";
import { getToken } from "../utils";
import { showToast } from '@nutui/nutui'
const service = axios.create({
  baseURL: 'http://172.21.0.93:3001',
  timeout: 1000 * 10,
  headers: { 'X-Custom-Header': 'foobar' }
});
interface IData {
  code: number,
  data: any,
  msg: string
}
axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (getToken()) {
      config.headers.token = getToken();
    }
    return config;
  },
  (err) => {
    return err;
  }
);
axios.interceptors.response.use((response: AxiosResponse) => {
  switch (response.status) {
    case 404:
      showToast.warn('访问404')
    case 501:
      showToast.warn('登录失效');
    case 403:
      showToast.warn('访问异常')
      break;
  }
  return response;
})


export default service;
