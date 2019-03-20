import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState, ProductsState, getProductsData } from 'src/app/core/+store';
import * as ProductsActions from './../../../core/+store/products/products.actions';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  products$: Observable<ReadonlyArray<Product>>;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit() {
    this.products$ = this.store.pipe(select(getProductsData));
    this.store.dispatch(new ProductsActions.GetProducts());
  }

  onProductClick(product: Product) {
    this.router.navigate([`admin/products/edit/${product.id}`]);
  }

  onCreateNewProduct() {
    this.router.navigate([`admin/products/create`]);
  }
}
