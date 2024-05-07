import { Component } from '@angular/core';
import {LoginComponent} from "./login/login.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    LoginComponent,
    RouterOutlet
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
