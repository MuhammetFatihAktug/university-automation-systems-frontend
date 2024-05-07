import {Component, EventEmitter, NgModule, Output} from '@angular/core';
import {NgxCaptchaModule} from "ngx-captcha";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [NgxCaptchaModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  siteKey: string;

  showPassword: boolean = false;

  loginForm: FormGroup;

  studentNumber: string = "";
  studentPassword: string = "";

  @Output() onSubmitLoginEvent = new EventEmitter;

  constructor(private formBuilder: FormBuilder) {
    this.siteKey = "6Lc-98wpAAAAANmQtrLV78NhB9gYYBHj3FShXV9M";
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      studentNumber: ['', [Validators.required]],
      studentPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const studentNumber = this.loginForm.get('studentNumber').value;
      const studentPassword = this.loginForm.get('studentPassword').value;
      this.onSubmitLoginEvent.emit({ studentNumber, studentPassword });
    } else {
      console.log('Form is invalid');
    }
  }

}
