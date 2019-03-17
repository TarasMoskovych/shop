import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CoreModule } from './../core.module';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: CoreModule
})
export class AppSettingsService {

  constructor(
    private localStorageService: LocalStorageService,
    private httpService: HttpClient
  ) { }

  getAdminCredentials(): Observable<any> {
    const credentials = this.localStorageService.getItem('admin');

    if (credentials) {
      return of(JSON.parse(credentials));
    } else {
      this.localStorageService.setItem('admin', JSON.stringify({ login: 'admin', password: 'nimda' }));
      return this.httpService.get('./assets/app-settings.json');
    }
  }
}
