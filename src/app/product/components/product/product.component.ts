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
  @Output() productClick: EventEmitter<Product> = new EventEmitter<Product>();

  ngOnInit() {
  }

  onProductClick(product: Product) {
    this.productClick.emit(product);
  }

  onBuy(event: MouseEvent, product: Product): void {
    event.stopPropagation();
    this.addToCart.emit(product);
  }

  onAddToCart(event: MouseEvent, product: Product): void {
    event.stopPropagation();
    this.addToCart.emit(product);
  }
}
