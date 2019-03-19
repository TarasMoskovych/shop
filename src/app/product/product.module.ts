import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { ProductRoutingModule } from './product-routing.module';
import { productsReducer } from '../core/+store';
import { ProductListComponent, ProductComponent, ProductDetailComponent } from './components';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    StoreModule.forFeature('tasks', productsReducer)
  ],
  exports: [ProductListComponent]
})
export class ProductModule { }
