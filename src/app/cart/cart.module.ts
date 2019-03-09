import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { CartComponent, CartItemComponent } from './components';

@NgModule({
  declarations: [CartComponent, CartItemComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [CartComponent]
})
export class CartModule { }
