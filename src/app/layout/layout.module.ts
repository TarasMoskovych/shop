import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { ContactUsComponent, HeaderComponent, FooterComponent } from './components';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    ContactUsComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    ContactUsComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
