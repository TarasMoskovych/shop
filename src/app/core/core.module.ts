import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsApiProvider } from './../product/products.config';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ProductsApiProvider],
  exports: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule is already loaded. Import it in the AppModule only.`);
    }
  }
}
