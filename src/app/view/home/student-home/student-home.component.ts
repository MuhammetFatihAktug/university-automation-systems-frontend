import {Component} from '@angular/core';
import {FooterComponent} from "../../../shared/components/footer/footer.component";
import {HeaderComponent} from "../../../shared/components/header/header.component";
import {NavbarComponent} from "../../../shared/components/navbar/navbar.component";
import {StudentService} from "../../../shared/services/student.service";
import {Student} from "../../../shared/models/student";

@Component({
  selector: 'app-student-home',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    NavbarComponent
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
