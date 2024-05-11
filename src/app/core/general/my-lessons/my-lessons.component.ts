import {Component} from '@angular/core';
import {Semester} from "../../../shared/models/semester";

@Component({
  selector: 'app-my-lessons',
  standalone: true,
  imports: [],
  templateUrl: './my-lessons.component.html',
  styleUrl: './my-lessons.component.css'
})
export class MyLessonsComponent {

  semesters: Semester[];

  ngOnInit() {
    this.semesters = [
      {semesterDate: "2023-2024", semesterPeriod: "Bahar"},
      {semesterDate: "2023-2024", semesterPeriod: "Guz"},
      {semesterDate: "2022-2023", semesterPeriod: "Bahar"},
      {semesterDate: "2022-2023", semesterPeriod: "Guz"},
      {semesterDate: "2021-2022", semesterPeriod: "Bahar"},
      {semesterDate: "2021-2022", semesterPeriod: "Guz"},
      {semesterDate: "2020-2021", semesterPeriod: "Bahar"}

    ];
  }

}
