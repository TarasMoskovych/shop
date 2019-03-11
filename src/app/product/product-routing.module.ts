import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductDetailComponent } from './components';

const routes: Routes = [
  {
    path: 'products/:productId',
    component: ProductDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
