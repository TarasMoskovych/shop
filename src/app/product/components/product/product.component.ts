import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from './../../models/product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() addToCart: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  onBuy(phone): void {
    console.log(`Buy ${phone.name}`);
  }

  onAddToCart(product: Product): void {
    this.addToCart.emit(product);
  }
}
