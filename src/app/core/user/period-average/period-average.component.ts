import {Component} from '@angular/core';
import {StudentService} from "../../../shared/services/student.service";
import {Chart, registerables} from 'chart.js';
import {StudentCourse} from "../../../shared/models/studentCourse";

@Component({
  selector: 'app-period-average',
  standalone: true,
  imports: [],
  templateUrl: './period-average.component.html',
  styleUrl: './period-average.component.css'
})
export class PeriodAverageComponent {
  public chart: any;
  studentGPA: { [key: string]: number } = {};

  constructor(private studentService: StudentService) {
    Chart.register(...registerables);
  }

  private createChart() {
    const labels = Object.keys(this.studentGPA);
    const data = Object.values(this.studentGPA);

    this.chart = new Chart("MyChart", {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'GPA per Period',
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
      this.studentGPA = await this.studentService.getStudentGpa();
      this.createChart();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}
