import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AuthService } from './../../../core/services';
import { Login } from './../../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  login = new Login();
  validData = true;

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.sub = this.authService.channel$.subscribe((status: boolean) => {
      this.validData = status;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onLogin() {
    this.authService.login(this.login.name, this.login.password).subscribe(() => {
      this.router.navigate(['/admin/products']);
    });
  }

  onLogout() {
    this.authService.logout();
  }

  onInput() {
    this.validData = true;
  }
}
