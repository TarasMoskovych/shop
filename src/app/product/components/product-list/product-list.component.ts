import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Product } from './../../models';
import { ProductHttpService } from './../../services';
import { CartService } from './../../../cart';
import { AppState } from './../../../core/+store/app.state';
import { ProductsState } from 'src/app/core/+store';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor(
    private productHttpService: ProductHttpService,
    private cartService: CartService,
    private router: Router,
    private store: Store<AppState>
  ) { }

  products$: Observable<Array<Product>>;
  productsState$: Observable<ProductsState>;

  ngOnInit() {
    this.products$ = this.productHttpService.getProducts();
    this.productsState$ = this.store.pipe(select('tasks'));
    console.log('Store: ', this.store);
  }

  onAddToCart(product: Product) {
    this.cartService.dispatchData(product);
  }

  onProductClick(product: Product) {
    this.router.navigate(['products', product.id]);
  }
}
