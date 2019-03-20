import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { AppState, getProductsData, getSelectedProduct } from 'src/app/core/+store';
import { Product } from 'src/app/product';
import { ProductHttpService } from './../../../product/services';
import * as ProductsActions from './../../../core/+store/products/products.actions';

@Component({
  selector: 'app-manage-product-form',
  templateUrl: './manage-product-form.component.html',
  styleUrls: ['./manage-product-form.component.css']
})
export class ManageProductFormComponent implements OnInit, OnDestroy {
  product: Product;
  productId: number;
  isCreated = true;

  products$: Observable<ReadonlyArray<Product>>;
  sub$: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productHttpService: ProductHttpService,
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.products$ = this.store.pipe(select(getProductsData));
    this.productId = +this.activatedRoute.snapshot.paramMap.get('productId');

    if (this.productId) {
      this.sub$ = this.store.pipe(select(getSelectedProduct)).subscribe(product => this.product = product);
      this.store.dispatch(new ProductsActions.GetProduct(this.productId));
      this.isCreated = false;
    } else {
      this.product = new Product();
      this.product.id = this.productHttpService.generateId();
    }
  }

  ngOnDestroy() {
    if (this.sub$) { this.sub$.unsubscribe(); }
  }

  onSaveProduct() {
    const product = { ...this.product };

    if (this.productId) {
      this.store.dispatch(new ProductsActions.UpdateProduct(product));
    } else {
      this.store.dispatch(new ProductsActions.CreateProduct(product));
    }
  }

  onRemove() {
    this.store.dispatch(new ProductsActions.DeleteProduct(this.product));
  }

  onGoBack(): void {
    this.router.navigate(['/admin/products']);
  }
}
