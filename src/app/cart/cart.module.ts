import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from './../shared/shared.module';
import { CartComponent, CartItemComponent, MiniCartComponent } from './components';

@NgModule({
  declarations: [CartComponent, CartItemComponent, MiniCartComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [CartComponent]
})
export class CartModule { }
