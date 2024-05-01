import { Component } from '@angular/core';
import {LoginFormComponent} from "./login-form/login-form.component";
import {AnnouncementsComponent} from "./announcements/announcements.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LoginFormComponent,
    AnnouncementsComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
