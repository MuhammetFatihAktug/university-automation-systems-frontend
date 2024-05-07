import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from "../services/auth.service";
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {

  const router: Router = inject(Router);
  if (localStorage.getItem("auth_token")) {
    return true;
  }
  return router.navigate(["login"]);
};
