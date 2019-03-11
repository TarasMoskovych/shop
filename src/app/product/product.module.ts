import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent, ProductComponent, ProductDetailComponent } from './components';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  exports: [ProductListComponent]
})
export class ProductModule { }
