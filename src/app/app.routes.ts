import {Routes} from '@angular/router';

import {LoginComponent} from "./view/login/login.component";
import {HomeContentComponent} from "./view/home/home-content.component";
import {CourseSemesterComponent} from "./core/course-semester/course-semester.component";
import {GeneralComponent} from "./core/general/general.component";
import {UserComponent} from "./core/user/user.component";
import {AuthGuard} from "./shared/guards/auth.guard";
import {ReportComponent} from "./core/report/report.component";


export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'home', redirectTo: 'home/general', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'home',
    component: HomeContentComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'course', component: CourseSemesterComponent},
      {path: 'general', component: GeneralComponent},
      {path: 'user', component: UserComponent},
      {path: 'report', component: ReportComponent}
    ]
  }
];
