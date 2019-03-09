import { Component, OnInit } from '@angular/core';

import { Product } from './../../models';
import { Products } from './../../services';
import { CartService } from './../../../cart/services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor(private productsService: Products, private cartService: CartService) { }

  products = [];

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onAddToCart(product: Product) {
    this.cartService.dispatchData(product);
  }
}
