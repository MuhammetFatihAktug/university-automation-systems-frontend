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
  groupedCourses: { [key: string]: StudentCourse[] } = {};

  constructor(private studentService: StudentService) {
  }

  async ngOnInit(): Promise<void> {
    try {
      this.groupedCourses = await this.studentService.getGroupedStudentCourses();
      console.log(this.groupedCourses);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  protected readonly Object = Object;
}
