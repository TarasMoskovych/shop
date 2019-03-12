import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from './../../models';
import { Products } from './../../services';
import { CartService } from './../../../cart';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor(
    private productsService: Products,
    private cartService: CartService,
    private router: Router
  ) { }

  products = [];

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onAddToCart(product: Product) {
    this.cartService.dispatchData(product);
  }

  onProductClick(product: Product) {
    this.router.navigate(['products', product.id]);
  }
}
