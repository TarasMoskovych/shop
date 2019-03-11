import { Injectable } from '@angular/core';

import { CoreModule } from 'src/app/core/core.module';

@Injectable({
  providedIn: CoreModule
})
export class LocalStorageService {

  constructor() { }

  setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  getItem(key: string) {
    return localStorage.getItem(key);
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
