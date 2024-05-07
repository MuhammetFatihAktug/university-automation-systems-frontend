import {Injectable, signal} from '@angular/core';
import {AxiosService} from './axios.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private axiosService: AxiosService) {
  }

  login(studentNumber: string, studentPassword: string): Promise<any> {
    return this.axiosService.request(
      "POST",
      "/login",
      {
        studentNumber: studentNumber,
        password: studentPassword
      }
    ).then(value => {
      this.axiosService.setAuthToken(value.data.token);
      return value.data;
    }).catch(error => {
      console.error(error);
      throw error;
    });
  }

}
