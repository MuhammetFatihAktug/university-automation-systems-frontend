import {Component} from '@angular/core';
import {LoginComponent} from "./login/login.component";
import {RouterOutlet} from "@angular/router";
import {HomeContentComponent} from "./home/home-content.component";
import {AuthService} from "../shared/services/auth.service";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    LoginComponent,
    RouterOutlet,
    HomeContentComponent,

  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  state: boolean;

  constructor(private authService: AuthService) {
    this.state = this.authService.authState;
  }


}
