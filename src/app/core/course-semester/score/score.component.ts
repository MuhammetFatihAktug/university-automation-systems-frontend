import {Component} from '@angular/core';
import {StudentService} from "../../../shared/services/student.service";
import {StudentCourse} from "../../../shared/models/studentCourse";
import {KeyValuePipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [
    NgForOf,
    KeyValuePipe
  ],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent {
  groupedCourses: { [key: string]: StudentCourse[] } = {};

  constructor(private studentService: StudentService) {
  }

  async ngOnInit() {
    try {
      this.groupedCourses = await this.studentService.getGroupedStudentCourses();
      console.log(this.groupedCourses);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


  protected readonly Object = Object;
}
