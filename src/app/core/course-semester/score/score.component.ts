import {Component} from '@angular/core';
import {StudentService} from "../../../shared/services/student.service";
import {StudentCourse} from "../../../shared/models/studentCourse";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent {
  studentCourse: StudentCourse[];

  constructor(private studentService: StudentService) {
  }

  async ngOnInit() {
    this.studentCourse = await this.studentService.getStudentCourse();
  }

}
