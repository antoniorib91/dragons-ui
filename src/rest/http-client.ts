import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const defaultURL = process.env.REACT_APP_API_DRAGONS;

class HttpClient {
  private static axios: AxiosInstance = axios.create({ baseURL: defaultURL });

  public static get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axios.get<T>(url, config);
  }

  public static post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axios.post<T>(url, data, config);
  }

  public static put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axios.put<T>(url, data, config);
  }

  public static delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axios.delete<T>(url, config);
  }
}

export default HttpClient;
