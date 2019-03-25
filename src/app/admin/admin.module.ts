import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin.routing.module';
import { AdminComponent } from './admin.component';
import {
  ManageOrdersComponent,
  ManageProductsComponent,
  ManageProductFormComponent
} from './components';

@NgModule({
  declarations: [
    AdminComponent,
    ManageOrdersComponent,
    ManageProductsComponent,
    ManageProductFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
