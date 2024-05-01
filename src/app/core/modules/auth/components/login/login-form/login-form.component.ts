import {Component} from '@angular/core';
import {NgxCaptchaModule} from "ngx-captcha";
import {AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [NgxCaptchaModule, ReactiveFormsModule, NgClass],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  siteKey: string;
  showPassword: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.siteKey = "6Lc-98wpAAAAANmQtrLV78NhB9gYYBHj3FShXV9M";
  }


  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {

  }

}
