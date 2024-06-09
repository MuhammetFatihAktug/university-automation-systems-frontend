import {Component} from '@angular/core';
import {StudentService} from "../../../shared/services/student.service";
import {Chart, registerables} from "chart.js";

@Component({
  selector: 'app-semester-average',
  standalone: true,
  imports: [],
  templateUrl: './semester-average.component.html',
  styleUrl: './semester-average.component.css'
})
export class SemesterAverageComponent {
  public chart: any;
  studentGPA: { [key: string]: number } = {};

  constructor(private studentService: StudentService) {
    Chart.register(...registerables);
  }

  private createChart() {
    const labels = Object.keys(this.studentGPA);
    const data = Object.values(this.studentGPA);

    this.chart = new Chart("semesterChart", {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'GPA per Every Semester',
            data: data,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        aspectRatio: 2.5,

        scales: {
          y: {
            max: 4,
            beginAtZero: true
          }
        }
      }
    });
  }

  private getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  async ngOnInit() {
    try {
      this.studentGPA = await this.studentService.getStudentGpaWithSemester();

      const sortedKeys = Object.keys(this.studentGPA).sort();
      const sortedData = {};
      sortedKeys.forEach(key => {
        sortedData[key] = this.studentGPA[key];
      });

      this.studentGPA = sortedData;
      this.createChart();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

}
