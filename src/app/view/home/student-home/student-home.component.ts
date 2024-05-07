import { Component } from '@angular/core';
import {FooterComponent} from "../../../shared/components/footer/footer.component";
import {HeaderComponent} from "../../../shared/components/header/header.component";

@Component({
  selector: 'app-student-home',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './student-home.component.html',
  styleUrl: './student-home.component.css'
})
export class StudentHomeComponent {

}
