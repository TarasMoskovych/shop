import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  Router
} from '@angular/router';

import { Observable } from 'rxjs';

import { AuthService } from './../services';
import { CoreModule } from './../core.module';

@Injectable({
  providedIn: CoreModule
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLogin();
  }

  private checkLogin(): boolean {
    if (this.authService.isLoggedIn) { return true; }

     // Navigate to the login page
    this.router.navigate(['/login']);
    return false;
  }
}
