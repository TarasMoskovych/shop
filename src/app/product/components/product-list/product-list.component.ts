import { Component, OnInit } from '@angular/core';

import { Product } from './../../models/product.model';
import { Products } from './../../services/products.service';
import { CartService } from './../../../cart/service/cart.service';

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
