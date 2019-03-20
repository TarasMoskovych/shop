import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Product } from 'src/app/product';
import { CartService } from 'src/app/cart';
import { AppState, getProductsData, getSelectedProduct } from './../../../core/+store';
import * as ProductsActions from './../../../core/+store/products/products.actions';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  product: Product;
  sub$: Subscription;
  products$: Observable<ReadonlyArray<Product>>;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.products$ = this.store.pipe(select(getProductsData));
    this.sub$ = this.store.pipe(select(getSelectedProduct)).subscribe(product => this.product = product);
    const id = +this.route.snapshot.paramMap.get('productId');

    if (id) {
      this.store.dispatch(new ProductsActions.GetProduct(+id));
    }
  }

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }

  onAddToCart(quantity: HTMLInputElement) {
    this.cartService.addItem(this.product, +quantity.value);
    quantity.value = '1';
  }
}
