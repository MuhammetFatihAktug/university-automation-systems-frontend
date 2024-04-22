import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  hide: boolean = true;

  showPassword() {
    this.hide = false;
  }

  hidePassword() {
    this.hide = true;
  }
}
