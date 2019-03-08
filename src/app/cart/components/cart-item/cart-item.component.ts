import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

import { Product } from 'src/app/product/models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit {
  @Input() item: Product;
  @Input() index: number;
  @Input() quantity: number;

  @Output() updateQuantity: EventEmitter<{ product: Product, quantity: number }>
                      = new EventEmitter<{ product: Product, quantity: number }>();
  @Output() remove: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  onRemove(item: Product) {
    this.remove.emit(item);
  }

  onUpdateQuantity(product: Product, quantity: number) {
    this.updateQuantity.emit({ product, quantity });
  }
}
