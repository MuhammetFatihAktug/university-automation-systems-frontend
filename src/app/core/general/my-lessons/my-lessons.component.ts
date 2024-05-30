import {Component, Input, SimpleChanges} from '@angular/core';
import {Semester} from "../../../shared/models/semester";
import {NgForOf, NgIf} from "@angular/common";
import {Lesson} from "../../../shared/models/lesson";
import {ReactiveFormsModule} from "@angular/forms";
import {StudentCourse} from "../../../shared/models/studentCourse";
import {CourseAbsence} from "../../../shared/models/courseAbsence";
import {StudentService} from "../../../shared/services/student.service";
import {Course} from "../../../shared/models/course";

@Component({
  selector: 'app-my-lessons',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './my-lessons.component.html',
  styleUrl: './my-lessons.component.css'
})
export class MyLessonsComponent {

   studentCourse: StudentCourse[] | null = null;

  constructor(private studentService: StudentService) {
  }

  async ngOnInit(): Promise<void> {
    try {
      this.studentCourse = await this.studentService.getStudentCourse();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

}
