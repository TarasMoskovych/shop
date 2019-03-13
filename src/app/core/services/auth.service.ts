import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule
})
export class AuthService {
  private channel = new Subject<boolean>();

  channel$ = this.channel.asObservable();
  isLoggedIn = false;

  constructor(private router: Router) {}

  login(): Observable<boolean> {
    return of(true)
      .pipe(
        delay(1000),
        tap(val => {
          this.isLoggedIn = val;
          this.dispatchData();
        })
      );
  }

  logout(): void {
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  dispatchData() {
    this.channel.next(true);
  }
}
