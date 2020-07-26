import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  constructor(private router: Router, private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    console.log(route);

    console.log(this.authService.isLoggedIn);


    if (!this.authService.isLoggedIn) {
      this.router.navigate(["login"]);
      return false;
    }

    return true;
  }
}
