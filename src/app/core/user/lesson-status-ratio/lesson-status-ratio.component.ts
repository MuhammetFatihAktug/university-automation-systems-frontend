import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../../shared/services/student.service";
import {Chart, registerables} from "chart.js";
import {StudentCourse} from "../../../shared/models/studentCourse";
import {KeyValuePipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-lesson-status-ratio',
  standalone: true,
  imports: [
    KeyValuePipe,
    NgIf,
    NgForOf
  ],
  templateUrl: './lesson-status-ratio.component.html',
  styleUrl: './lesson-status-ratio.component.css'
})
export class LessonStatusRatioComponent implements OnInit {
  public chart: any;
  groupCoursesByDateAndSemester: { [key: string]: StudentCourse[] } = {};
  periods: string[] = [];
  selectedPeriod: string | null = null;

  constructor(private studentService: StudentService) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.loadStudentCourses();
  }

  async loadStudentCourses() {
    try {
      this.groupCoursesByDateAndSemester = this.studentService.groupCoursesByDateAndSemester(await this.studentService.getStudentCourse());
      this.periods = Object.keys(this.groupCoursesByDateAndSemester);
      if (this.periods.length > 0) {
        this.selectedPeriod = this.periods[0];
      }
      this.updateChart();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  onPeriodChange(event: any) {
    this.selectedPeriod = event.target.value;
    this.updateChart();
  }

  updateChart() {
    if (this.chart) {
      this.chart.destroy();
    }

    const courses = this.groupCoursesByDateAndSemester[this.selectedPeriod];
    const labels = courses.map(course => course.course.name);
    const data = courses.map(course => course.average);

    this.chart = new Chart("lessonStatusRatio", {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Ortalamalar',
            data: data,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        aspectRatio: 2.5,
        responsive: true,
        scales: {
          y: {
            max: 100,
            beginAtZero: true
          }
        }
      }
    });
  }
}
