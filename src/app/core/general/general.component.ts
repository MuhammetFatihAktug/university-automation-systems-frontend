import { Component } from '@angular/core';
import {LessonsProgramComponent} from "./lessons-program/lessons-program.component";

@Component({
  selector: 'app-general',
  standalone: true,
  imports: [
    LessonsProgramComponent
  ],
  templateUrl: './general.component.html',
  styleUrl: './general.component.css'
})
export class GeneralComponent {

}
