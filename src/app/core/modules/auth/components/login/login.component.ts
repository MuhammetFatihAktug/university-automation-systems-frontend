import {Component} from '@angular/core';
import {LoginFormComponent} from "./login-form/login-form.component";
import {NgIf} from "@angular/common";
import {AxiosService} from "../../../../../shared/services/axios.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LoginFormComponent,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  constructor(private axiosService: AxiosService) {
  }

  onLogin(input: any) {
    this.axiosService.request(
      "POST",
      "/login",
      {
        studentNumber: input.studentNumber,
        studentPassword: input.studentPassword
      }
    )
    console.log(input)
  }


}
