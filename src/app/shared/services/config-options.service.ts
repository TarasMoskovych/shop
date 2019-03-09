import { Injectable } from '@angular/core';

import { CoreModule } from './../../core/core.module';
import { Configs } from './../models';

@Injectable({
  providedIn: CoreModule
})
export class ConfigOptionsService {

  constructor() { }

  private configs: Configs = {
    id: null,
    login: null,
    email: null,
    password: null
  };

  getId() {
    return this.configs.id;
  }

  getLogin() {
    return this.configs.login;
  }

  getEmail() {
    return this.configs.email;
  }

  getPassword() {
    return this.configs.password;
  }

  setId(id: number) {
    this.configs.id = id;
  }

  setLogin(login: string) {
    this.configs.login = login;
  }

  setEmail(email: string) {
    this.configs.email = email;
  }

  setPassword(password: string) {
    this.configs.password = password;
  }
}
