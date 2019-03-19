import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  Router,
  CanLoad,
  Route,
  UrlSegment
} from '@angular/router';

import { Observable } from 'rxjs';

import { AuthService } from './../services';
import { CoreModule } from './../core.module';

@Injectable({
  providedIn: CoreModule
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLogin();
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    return this.checkLogin();
  }

  private checkLogin(): boolean {
    return true;
    if (this.authService.isLoggedIn) { return true; }

     // Navigate to the login page
    this.router.navigate(['/login']);
    return false;
  }
}
