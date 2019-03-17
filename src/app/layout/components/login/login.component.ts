import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../../../core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLogin(login: string, password: string) {
    this.authService.login(login, password).subscribe(() => {
      this.router.navigate(['/admin/products']);
    });
  }

  onLogout() {
    this.authService.logout();
  }
}
