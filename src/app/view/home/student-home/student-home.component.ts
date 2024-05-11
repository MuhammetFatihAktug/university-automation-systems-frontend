import {Component} from '@angular/core';
import {FooterComponent} from "../../../shared/components/footer/footer.component";
import {HeaderComponent} from "../../../shared/components/header/header.component";
import {StudentService} from "../../../shared/services/student.service";
import {Student} from "../../../shared/models/student";
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";


@Component({
  selector: 'app-student-home',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
  ],
  templateUrl: './student-home.component.html',
  styleUrl: './student-home.component.css'
})
export class StudentHomeComponent {
  student: Student;

  constructor(private studentService: StudentService) {
    this.student = studentService.getStudent();
  }

}
