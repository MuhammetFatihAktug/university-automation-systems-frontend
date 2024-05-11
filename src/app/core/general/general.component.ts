import { Component } from '@angular/core';
import {LessonsProgramComponent} from "./lessons-program/lessons-program.component";
import {ExamCalendarComponent} from "./exam-calendar/exam-calendar.component";
import {MyLessonsComponent} from "./my-lessons/my-lessons.component";

@Component({
  selector: 'app-general',
  standalone: true,
  imports: [
    LessonsProgramComponent,
    ExamCalendarComponent,
    MyLessonsComponent
  ],
  templateUrl: './general.component.html',
  styleUrl: './general.component.css'
})
export class GeneralComponent {

}
