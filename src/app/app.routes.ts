import { Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {StudentViewComponent} from "./components/info-section/student-ui/student-view/student-view.component";

export const routes: Routes = [
  {path: '', component: StudentViewComponent},
  {path: 'student', component: StudentViewComponent},

];
