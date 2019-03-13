import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Product } from 'src/app/product';
import { Products } from '../../services';
import { CartService } from 'src/app/cart';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private productService: Products,
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.product = this.productService.getProductById(this.route.snapshot.paramMap.get('productId'));
  }

  onAddToCart(quantity: HTMLInputElement) {
    this.cartService.addItem(this.product, +quantity.value);
    quantity.value = '1';
  }
}
