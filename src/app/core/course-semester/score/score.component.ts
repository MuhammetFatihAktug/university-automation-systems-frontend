import {Component} from '@angular/core';
import {StudentService} from "../../../shared/services/student.service";
import {StudentCourse} from "../../../shared/models/studentCourse";
import {KeyValuePipe, NgClass, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [
    NgForOf,
    KeyValuePipe,
    NgClass,
    NgIf
  ],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent {
  groupCoursesByDateAndSemester: { [key: string]: StudentCourse[] } = {};
  periods: string[] = [];
  selectedPeriod: string | null = null;

  constructor(private studentService: StudentService) {
  }

  async ngOnInit() {
    try {
      this.groupCoursesByDateAndSemester = this.studentService.groupCoursesByDateAndSemester(await this.studentService.getStudentCourse());
      this.periods = Object.keys(this.groupCoursesByDateAndSemester);
      if (this.periods.length > 0) {
        this.selectedPeriod = this.periods[0];
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  onPeriodChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedPeriod = selectElement.value;
  }

  protected readonly Object = Object;
}
