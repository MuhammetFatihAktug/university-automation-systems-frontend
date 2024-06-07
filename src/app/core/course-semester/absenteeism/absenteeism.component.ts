import {Component} from '@angular/core';
import {StudentService} from "../../../shared/services/student.service";
import {CourseAbsence} from "../../../shared/models/courseAbsence";
import {DatePipe, KeyValuePipe, NgClass, NgForOf, NgIf, SlicePipe} from "@angular/common";
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
    NgClass,
    KeyValuePipe
  ],
  templateUrl: './absenteeism.component.html',
  styleUrl: './absenteeism.component.css'
})
export class AbsenteeismComponent {

  courseAbsence: { [key: string]: { [courseName: string]: { dates: string[], absenceStatus: boolean[] } } } = {};


  constructor(private studentService: StudentService) {
  }

  async ngOnInit(): Promise<void> {
    try {
      this.courseAbsence = await this.studentService.getGroupedCourseAbsence();
      console.log(this.courseAbsence);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  protected readonly Object = Object;
}
