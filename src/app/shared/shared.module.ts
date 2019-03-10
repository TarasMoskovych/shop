import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClickDirective, HoverDirective } from './directives';
import { OrderByPipe } from './pipes';

@NgModule({
  declarations: [
    HoverDirective,
    ClickDirective,
    OrderByPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HoverDirective,
    ClickDirective,
    OrderByPipe
  ]
})
export class SharedModule { }
