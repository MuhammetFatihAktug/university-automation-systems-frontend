import {Routes} from '@angular/router';

import {LoginComponent} from "./view/login/login.component";
import {HomeContentComponent} from "./view/home/home-content.component";
import {TestComponent} from "./shared/components/test/test.component";
import {CourseSemesterComponent} from "./core/course-semester/course-semester.component";
import {GeneralComponent} from "./core/general/general.component";
import {UserComponent} from "./core/user/user.component";
import {ApplicationComponent} from "./core/application/application.component";
import {PreparationComponent} from "./core/preparation/preparation.component";
import {FormComponent} from "./core/form/form.component";


export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'home', redirectTo: 'home/general', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'home', component: HomeContentComponent, children: [
      {path: 'course', component: CourseSemesterComponent},
      {path: 'general', component: GeneralComponent},
      {path: 'form', component: FormComponent},
      {path: 'preparation', component: PreparationComponent},
      {path: 'application', component: ApplicationComponent},
      {path: 'user', component: UserComponent}
    ]
  },
  {path: 'test', component: TestComponent}
];
