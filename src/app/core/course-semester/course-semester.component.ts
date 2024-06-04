import {Component} from '@angular/core';
import {ExamCalendarComponent} from "../general/exam-calendar/exam-calendar.component";
import {LessonsProgramComponent} from "../general/lessons-program/lessons-program.component";
import {MyLessonsComponent} from "../general/my-lessons/my-lessons.component";
import {TuitionInfoComponent} from "../general/tuition-info/tuition-info.component";
import {ScoreComponent} from "./score/score.component";

import {AbsenteeismComponent} from "./absenteeism/absenteeism.component";

@Component({
  selector: 'app-course-semester',
  standalone: true,
  imports: [
    ExamCalendarComponent,
    LessonsProgramComponent,
    MyLessonsComponent,
    TuitionInfoComponent,
    ScoreComponent,

    AbsenteeismComponent
  ],
  templateUrl: './course-semester.component.html',
  styleUrl: './course-semester.component.css'
})
export class CourseSemesterComponent {

}
