import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appClick]'
})
export class ClickDirective {
  constructor(private el: ElementRef, private render: Renderer2) { }

  @HostListener('click', ['$event'])
  onclick(event: MouseEvent) {
    this.render.setStyle(this.el.nativeElement, 'border', '1px solid blue');
    this.render.setStyle(this.el.nativeElement, 'backgroundColor', '#ddd');
    this.render.setStyle(this.el.nativeElement, 'padding', '10px');
  }
}
