import {Component} from '@angular/core';
import {FooterComponent} from "../../../shared/components/footer/footer.component";
import {HeaderComponent} from "../../../shared/components/header/header.component";
import {StudentService} from "../../../shared/services/student.service";
import {Student} from "../../../shared/models/student";
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {StudentCourse} from "../../../shared/models/studentCourse";
import {CourseAbsence} from "../../../shared/models/courseAbsence";


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
  studentCourse: StudentCourse[];
  courseAbsence: CourseAbsence[];

  constructor(private studentService: StudentService) {

  }

  ngOnInit(): void {
    this.studentService.getStudent()
      .then(student => {
        this.student = student;
        console.log('Student data:', this.student);
      })
      .catch(error => {
        console.error('Error fetching student data:', error);
      });

    this.studentService.getStudentCourse()
      .then(studentCourse => {
        this.studentCourse = studentCourse;
        console.log('Student Course data:', this.studentCourse);
      })
      .catch(error => {
        console.error('Error fetching student course data:', error);
      });
    this.studentService.getAllCourseAbsence()
      .then(courseAbsence => {
        this.courseAbsence = courseAbsence;
        console.log('Course absence data:', this.courseAbsence);
      })
      .catch(error => {
        console.error('Error fetching  course absence data:', error);
      });
  }
}
