import { Component } from '@angular/core';
import {LoginFormComponent} from "./login-form/login-form.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LoginFormComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
