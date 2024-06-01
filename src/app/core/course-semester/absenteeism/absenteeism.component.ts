import {Component} from '@angular/core';
import {StudentService} from "../../../shared/services/student.service";
import {CourseAbsence} from "../../../shared/models/courseAbsence";
import {DatePipe, NgClass, NgForOf, NgIf, SlicePipe} from "@angular/common";
import {filter} from "rxjs";
import {StudentCourse} from "../../../shared/models/studentCourse";

@Component({
  selector: 'app-absenteeism',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    DatePipe,
    SlicePipe,
    NgClass
  ],
  templateUrl: './absenteeism.component.html',
  styleUrl: './absenteeism.component.css'
})
export class AbsenteeismComponent {

  courseAbsence: CourseAbsence[] | null = null;
  studentCourse: StudentCourse[] | null = null;

  constructor(private studentService: StudentService) {
  }

  async ngOnInit(): Promise<void> {

    this.courseAbsence = await this.studentService.getAllCourseAbsence();
    this.studentCourse = await this.studentService.getStudentCourse();

  }


}
