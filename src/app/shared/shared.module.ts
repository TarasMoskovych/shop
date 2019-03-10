import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ClickDirective, HoverDirective } from './directives';
import { OrderByPipe } from './pipes';

@NgModule({
  declarations: [
    HoverDirective,
    ClickDirective,
    ContactUsComponent,
    OrderByPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HoverDirective,
    ClickDirective,
    ContactUsComponent,
    OrderByPipe
  ]
})
export class SharedModule { }
