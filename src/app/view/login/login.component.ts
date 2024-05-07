import {Component} from '@angular/core';
import {LoginFormComponent} from "./login-form/login-form.component";
import {NgIf} from "@angular/common";
import {Router} from "@angular/router";
import {HeaderComponent} from "../../shared/components/header/header.component";
import {FooterComponent} from "../../shared/components/footer/footer.component";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LoginFormComponent,
    NgIf,

    HeaderComponent,
    FooterComponent
  ],

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  componentToShow: string = "loginForm";

  constructor(private authService: AuthService, private route: Router) {
  }

  onLogin(input: any) {
    this.componentToShow = "spin";
    this.authService.login(input.studentNumber, input.studentPassword).then(value => {
      if (value) {
        this.route.navigate(["/home"]);
      } else {
        console.error("password and number does not exist")
      }
      this.componentToShow = "loginForm";
    })
  }

}

