import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { CartComponent, CartItemComponent, MiniCartComponent } from './components';

@NgModule({
  declarations: [CartComponent, CartItemComponent, MiniCartComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [CartComponent]
})
export class CartModule { }
