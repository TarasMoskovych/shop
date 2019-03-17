import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { delay, tap, switchMap } from 'rxjs/operators';

import { AppSettingsService } from './app-settings.service';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule
})
export class AuthService {
  private channel = new Subject<boolean>();

  channel$ = this.channel.asObservable();
  isLoggedIn = false;

  constructor(private router: Router, private appSettingsService: AppSettingsService) {}

  login(login: string, password: string): Observable<boolean> {
    return this.appSettingsService.getAdminCredentials().pipe(switchMap((data) => {
      if (data.login === login && data.password === password) {
        return of(true).pipe(
          delay(1000),
          tap(val => {
            this.isLoggedIn = val;
            this.dispatchData();
          })
        );
     } else {
      return of(false).pipe(
        tap(() => {
          this.isLoggedIn = false;
        })
      );
     }
    }));
  }

  logout(): void {
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  dispatchData() {
    this.channel.next(true);
  }
}
