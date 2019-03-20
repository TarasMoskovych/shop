import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Product } from './../../models';
import { CartService } from './../../../cart';
import { AppState, getProductsData, getProductsError } from 'src/app/core/+store';
import * as ProductsActions from './../../../core/+store/products/products.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private router: Router,
    private store: Store<AppState>
  ) { }

  products$: Observable<ReadonlyArray<Product>>;
  productsError$: Observable<Error | string>;

  ngOnInit() {
    this.products$ = this.store.pipe(select(getProductsData));
    this.productsError$ = this.store.pipe(select(getProductsError));
    this.store.dispatch(new ProductsActions.GetProducts());
  }

  onAddToCart(product: Product) {
    this.cartService.dispatchData(product);
  }

  onProductClick(product: Product) {
    this.router.navigate(['products', product.id]);
  }
}
