import {Component} from '@angular/core';
import {KeyValuePipe, NgForOf, NgIf} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {StudentCourse} from "../../../shared/models/studentCourse";
import {StudentService} from "../../../shared/services/student.service";

@Component({
  selector: 'app-my-lessons',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    KeyValuePipe
  ],
  templateUrl: './my-lessons.component.html',
  styleUrl: './my-lessons.component.css'
})
export class MyLessonsComponent {

  studentCourse: StudentCourse[] | null = null;
  groupedCourses: { [key: string]: StudentCourse[] } = {};

  constructor(private studentService: StudentService) {
  }

  async ngOnInit(): Promise<void> {
    try {
      this.studentCourse = await this.studentService.getStudentCourse();
      this.groupCoursesByDate();
      console.log(this.groupedCourses)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  groupCoursesByDate() {
    if (this.studentCourse) {
      this.studentCourse.forEach(value => {
        const date: string = value.createdDate;
        if (!this.groupedCourses[date]) {
          this.groupedCourses[date] = [];
        }
        this.groupedCourses[date].push(value);
      });
    } else {
      console.error('studentCourse is null or undefined');
    }
  }
}
