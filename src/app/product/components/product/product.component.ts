import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Product } from './../../models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() addToCart: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  onBuy(product: Product): void {
    console.log(`Buy ${product.name}`);
  }

  onAddToCart(product: Product): void {
    this.addToCart.emit(product);
  }
}
