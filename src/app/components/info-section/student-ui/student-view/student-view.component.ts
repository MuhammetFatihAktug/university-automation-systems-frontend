import { Component } from '@angular/core';
import {HeaderComponent} from "../../../default-items/header/header.component";

@Component({
  selector: 'app-student-view',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './student-view.component.html',
  styleUrl: './student-view.component.css'
})
export class StudentViewComponent {

}
