import axios, { AxiosRequestConfig } from "axios";

type T1 = <T>(url: string, config?: AxiosRequestConfig) => Promise<T>;
type T2 = <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
) => Promise<T>;

interface Request {
  get: T1;
  delete: T1;
  head: T1;
  options: T1;
  post: T2;
  put: T2;
  patch: T2;
}
const instance = axios.create({
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

const methods1 = ["get", "delete", "head", "options"] as const;
const methods2 = ["post", "put", "patch"] as const;

const request: Request = {} as Request;

methods1.forEach((method) => {
  request[method] = <T>(url: string, config?: AxiosRequestConfig) =>
    instance[method]<T>(url, config).then(({ data }) => data);
});

methods2.forEach((method) => {
  request[method] = <T>(url: string, data: any, config?: AxiosRequestConfig) =>
    instance[method]<T>(url, data, config).then(({ data }) => data);
});

export default request;
