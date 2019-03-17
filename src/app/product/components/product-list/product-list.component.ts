import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Product } from './../../models';
import { ProductHttpService } from './../../services';
import { CartService } from './../../../cart';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor(
    private productHttpService: ProductHttpService,
    private cartService: CartService,
    private router: Router
  ) { }

  products$: Observable<Array<Product>>;

  ngOnInit() {
    this.products$ = this.productHttpService.getProducts();
  }

  onAddToCart(product: Product) {
    this.cartService.dispatchData(product);
  }

  onProductClick(product: Product) {
    this.router.navigate(['products', product.id]);
  }
}
