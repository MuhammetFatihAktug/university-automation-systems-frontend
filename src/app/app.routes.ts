import {Routes} from '@angular/router';
import {authGuard} from "./shared/guards/auth.guard";
import {StudentHomeComponent} from "./view/home/student-home/student-home.component";
import {LoginComponent} from "./view/login/login.component";
import {HomeContentComponent} from "./view/home/home-content.component";

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeContentComponent, canActivate: [authGuard]},
  {path: '', component: LoginComponent},
];
