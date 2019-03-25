import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClickDirective, HoverDirective } from './directives';
import { OrderByPipe } from './pipes';
import { AsyncLoginValidatorDirective } from '../validators';

@NgModule({
  declarations: [
    HoverDirective,
    ClickDirective,
    OrderByPipe,
    AsyncLoginValidatorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HoverDirective,
    ClickDirective,
    OrderByPipe,
    AsyncLoginValidatorDirective
  ]
})
export class SharedModule { }
