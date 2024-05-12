import {Component} from '@angular/core';
import {Semester} from "../../../shared/models/semester";
import {NgForOf, NgIf} from "@angular/common";
import {Lesson} from "../../../shared/models/lesson";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-my-lessons',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './my-lessons.component.html',
  styleUrl: './my-lessons.component.css'
})
export class MyLessonsComponent {

  semesters: Semester[];
  selectedSemester: any = {};
  lessons: Lesson[];

  selectSemester(semester: any) {
    this.selectedSemester = semester;
  }

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

    this.lessons = [{
      name: "Veri analizi",
      code: "vr-23",
      day: null,
      time: null,
      academician: "Gurcan Yavuz",
      location: null},
      {
      name: "Makine Ogrenmesi",
      code: "vr-23",
      day: null,
      time: null,
      academician: "Hasan Temurtas",
      location: null
    }, {
      name: "Oyun Teorisi",
      code: "vr-23",
      day: null,
      time: null,
      academician: "Gurcan Yavuz",
      location: null
    }, {
      name: "Matematik 3",
      code: "vr-23",
      day: null,
      time: null,
      academician: "Gurcan Yavuz",
      location: null
    }];
  }

}
