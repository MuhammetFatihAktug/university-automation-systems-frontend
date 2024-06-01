import {Injectable, signal} from '@angular/core';
import {AxiosService} from './axios.service';
import {StudentService} from "./student.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private axiosService: AxiosService) {
  }

  async login(email: string, studentPassword: string): Promise<any> {
    try {
      const response = await this.axiosService.request(
        "POST",
        "/login",
        {email: email, password: studentPassword},
        false
      );
      this.axiosService.setAuthToken(response.data.access_token);
      this.axiosService.setRefreshToken(response.data.refresh_token);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

}
