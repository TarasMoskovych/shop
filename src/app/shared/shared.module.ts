import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoverDirective } from './directives/hover.directive';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ClickDirective } from './directives/click.directive';

@NgModule({
  declarations: [HoverDirective, ClickDirective, ContactUsComponent],
  imports: [
    CommonModule
  ],
  exports: [HoverDirective, ClickDirective, ContactUsComponent]
})
export class SharedModule { }
