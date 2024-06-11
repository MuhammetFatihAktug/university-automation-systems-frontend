import { Component } from '@angular/core';
import {AbsenteeismComponent} from "../course-semester/absenteeism/absenteeism.component";
import {ScoreComponent} from "../course-semester/score/score.component";
import {PeriodAverageComponent} from "./period-average/period-average.component";
import {SemesterAverageComponent} from "./semester-average/semester-average.component";
import {LessonStatusRatioComponent} from "./lesson-status-ratio/lesson-status-ratio.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    AbsenteeismComponent,
    ScoreComponent,
    PeriodAverageComponent,
    SemesterAverageComponent,
    LessonStatusRatioComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

}
