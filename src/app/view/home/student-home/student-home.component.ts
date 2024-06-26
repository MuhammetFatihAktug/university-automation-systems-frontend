import {Component} from '@angular/core';
import {FooterComponent} from "../../../shared/components/footer/footer.component";
import {HeaderComponent} from "../../../shared/components/header/header.component";
import {StudentService} from "../../../shared/services/student.service";
import {Student} from "../../../shared/models/student";
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {StudentCourse} from "../../../shared/models/studentCourse";
import {CourseAbsence} from "../../../shared/models/courseAbsence";
import {NgIf} from "@angular/common";
import {AuthService} from "../../../shared/services/auth.service";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";


@Component({
  selector: 'app-student-home',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    NgIf,
  ],
  templateUrl: './student-home.component.html',
  styleUrl: './student-home.component.css'
})
export class StudentHomeComponent {
  student: Student | null = null;


  constructor(private studentService: StudentService, private authService: AuthService
  ) {
  }

  async ngOnInit(): Promise<void> {
    try {
      this.student = await this.studentService.getStudent();

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  logout() {
    this.authService.logout().then(r => console.log(r));
  }
}

