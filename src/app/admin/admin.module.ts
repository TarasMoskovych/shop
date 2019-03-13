import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin.routing.module';
import { AdminComponent } from './admin.component';
import { ManageOrdersComponent, ManageProductsComponent } from './components';

@NgModule({
  declarations: [AdminComponent, ManageOrdersComponent, ManageProductsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
