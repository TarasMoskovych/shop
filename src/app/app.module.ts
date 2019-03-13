import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from './shared/shared.module';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    ProductModule,
    CartModule,
    LayoutModule,
    AdminModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private router: Router) {
    console.log(JSON.stringify(this.router.config, undefined, 2));
  }
}
