import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  ManageOrdersComponent,
  ManageProductsComponent,
  ManageProductFormComponent
} from './components';
import { AuthGuard } from './../core/guards/auth.guard';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          { path: 'products', component: ManageProductsComponent },
          { path: 'products/edit/:productId', component: ManageProductFormComponent },
          { path: 'products/create', component: ManageProductFormComponent },
          { path: 'orders', component: ManageOrdersComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
