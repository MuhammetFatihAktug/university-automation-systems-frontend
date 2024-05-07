import {Injectable} from '@angular/core';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  constructor() {
    axios.defaults.baseURL = "http://localhost:8080";
    axios.defaults.headers.post["Content-Type"] = "application/json";
  }

  getAuthToken(): string | null {
    return window.localStorage.getItem("auth_token");
  }

  setAuthToken(token: string) {
    if (token != null) {
      window.localStorage.setItem("auth_token", token);
    } else {
      window.localStorage.removeItem("auth_token");
    }
  }


  request(method: string, url: string, data: any) {
    let headers = {};

    if (this.getAuthToken() !== null && this.getAuthToken() !== '') {
      headers = {"Authorization": "Bearer " + this.getAuthToken()}
    }

    return axios({
      method: method,
      url: url,
      data: data,
      headers: headers
    });
  }
}
