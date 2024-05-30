import {Injectable} from '@angular/core';
import axios, {AxiosRequestConfig} from "axios";

@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  constructor() {
    axios.defaults.baseURL = "http://localhost:8080";
    axios.defaults.headers.post["Content-Type"] = "application/json";
  }

  getAuthToken(): string | null {
    return window.localStorage.getItem("access_token");
  }

  getRefreshToken(): string | null {
    return window.localStorage.getItem("refresh_token");
  }

  setAuthToken(auth_token: string) {
    window.localStorage.setItem("access_token", auth_token);
  }

  setRefreshToken(refresh_token: string) {
    window.localStorage.setItem("refresh_token", refresh_token);
  }

  async request(method: string, url: string, data: any = {}, requiresAuth: boolean = true) {
    const headers: any = {
      'Content-Type': 'application/json'
    };

    if (requiresAuth) {
      const token = this.getAuthToken();
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      } else {
        throw new Error('Authorization token is missing');
      }
    }

    const config: AxiosRequestConfig = {
      method,
      url,
      headers,
      data
    };

    try {
      const response = await axios(config);
      return response;
    } catch (error) {
      console.error('API request error:', error);
      throw error;
    }
  }
}
