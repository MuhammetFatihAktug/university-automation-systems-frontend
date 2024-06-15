import {Component} from '@angular/core';
import {TranscriptComponent} from "./transkript/transcript.component";


@Component({
  selector: 'app-report',

  imports: [
    TranscriptComponent
  ],
  templateUrl: './report.component.html',
  standalone: true,
  styleUrl: './report.component.css'
})
export class ReportComponent {

}
