import { Component } from '@angular/core';
import {StudentHomeComponent} from "./student-home/student-home.component";
import {AcademicHomeComponent} from "./academic-home/academic-home.component";

@Component({
  selector: 'app-home-content',
  standalone: true,
  imports: [
    StudentHomeComponent,
    AcademicHomeComponent
  ],
  templateUrl: './home-content.component.html',
  styleUrl: './home-content.component.css'
})
export class HomeContentComponent {
    currentUserType:string = "student"  ;

}
