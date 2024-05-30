import {Component} from '@angular/core';
import {LessonsProgramComponent} from "./lessons-program/lessons-program.component";
import {ExamCalendarComponent} from "./exam-calendar/exam-calendar.component";
import {MyLessonsComponent} from "./my-lessons/my-lessons.component";
import {TuitionInfoComponent} from "./tuition-info/tuition-info.component";
import {StudentCourse} from "../../shared/models/studentCourse";
import {StudentService} from "../../shared/services/student.service";

@Component({
  selector: 'app-general',
  standalone: true,
  imports: [
    LessonsProgramComponent,
    ExamCalendarComponent,
    MyLessonsComponent,
    TuitionInfoComponent
  ],
  templateUrl: './general.component.html',
  styleUrl: './general.component.css'
})
export class GeneralComponent {


}
