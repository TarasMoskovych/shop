import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { ContactUsComponent, HeaderComponent, FooterComponent } from './components';

@NgModule({
  declarations: [
    ContactUsComponent,
    HeaderComponent,
    FooterComponent,
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
