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
  errorMessage: string = "";

  constructor(private authService: AuthService, private router: Router) {
  }

  async onSubmitLoginEvent(data: { email: string, studentPassword: string }) {
    this.componentToShow = "spin";
    const success = await this.authService.login(data.email, data.studentPassword);
    if (success) {
      this.router.navigate(["/home"]);
    } else {
      this.errorMessage = "E-posta veya şifrenizi hatalı girdiniz!";
      this.componentToShow = "loginForm";
    }
  }
}
