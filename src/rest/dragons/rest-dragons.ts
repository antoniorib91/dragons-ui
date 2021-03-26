import { AxiosResponse } from 'axios';
import HttpClient from '../http-client';

class RestDragons {
  public static getDragons(): Promise<AxiosResponse<any>> {
    return HttpClient.get<any>('/v1/dragon');
  }

  public static getDragon(id: string): Promise<AxiosResponse<any>> {
    return HttpClient.get<any>(`/v1/dragon/${id}`);
  }

  public static postDragon(data: unknown): Promise<AxiosResponse<any>> {
    return HttpClient.post<any>('/v1/dragon', data);
  }

  public static putDragon(id: string, data: unknown): Promise<AxiosResponse<any>> {
    return HttpClient.put<any>(`/v1/dragon/${id}`, data);
  }

  public static deleteDragon(id: string): Promise<AxiosResponse<any>> {
    return HttpClient.delete<any>(`/v1/dragon/${id}`);
  }
}

export default RestDragons;
