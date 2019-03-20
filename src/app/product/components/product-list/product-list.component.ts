import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Product } from './../../models';
import { CartService } from './../../../cart';
import { AppState, ProductsState } from 'src/app/core/+store';
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

  productsState$: Observable<ProductsState>;

  ngOnInit() {
    this.productsState$ = this.store.pipe(select('products'));
    this.store.dispatch(new ProductsActions.GetProducts());
    console.log('Store: ', this.store);
  }

  onAddToCart(product: Product) {
    this.cartService.dispatchData(product);
  }

  onProductClick(product: Product) {
    this.router.navigate(['products', product.id]);
  }
}
