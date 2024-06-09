import {Injectable, signal} from '@angular/core';
import {AxiosService} from './axios.service';
import {StudentService} from "./student.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private axiosService: AxiosService, private route: Router) {
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
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  async logout(): Promise<void> {
    try {
      this.axiosService.setAuthToken('');
      this.axiosService.setRefreshToken('');
      await this.route.navigate(["/login"]);
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  }

  isAuthenticated(): boolean {
    const authToken = this.axiosService.getAuthToken();
    return !!authToken && authToken !== '';
  }
}
