import {Component} from '@angular/core';
import {NgClass} from "@angular/common";
import {SigninComponent} from "../signin/signin.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgClass,
    SigninComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  active: string = "login"

  onLoginTab() {
    this.active = "login"
  }

  onRegisterTab() {
    this.active = "register"
  }
}
