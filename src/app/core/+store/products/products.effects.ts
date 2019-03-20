import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { switchMap, map, catchError, pluck, concatMap, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import * as ProductsActions from './products.actions';
import { Product } from './../../../product';
import { ProductHttpService } from 'src/app/product/services';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private productHttpService: ProductHttpService,
    private router: Router
  ) { }

  @Effect()
  getProducts$: Observable<Action> = this.actions$.pipe(
    ofType<ProductsActions.GetProducts>(ProductsActions.ProductsActionTypes.GET_PRODUCTS),
    switchMap((action: ProductsActions.GetProducts) =>
      this.productHttpService
        .getProducts().pipe(
          map(products => new ProductsActions.GetProductsSuccess(products)),
          catchError(err => of(new ProductsActions.GetProductsError(err)))
        )
    )
  );

  @Effect()
  getProduct$: Observable<Action> = this.actions$.pipe(
    ofType<ProductsActions.GetProduct>(ProductsActions.ProductsActionTypes.GET_PRODUCT),
    pluck('payload'),
    switchMap(payload =>
      this.productHttpService
        .getProduct(+payload).pipe(
          map(product => new ProductsActions.GetProductSuccess(product)),
          catchError(err => of(new ProductsActions.GetProductError(err)))
        )
    )
  );

  @Effect()
  updateProduct$: Observable<Action> = this.actions$.pipe(
    ofType<ProductsActions.UpdateProduct>(ProductsActions.ProductsActionTypes.UPDATE_PRODUCT),
    pluck('payload'),
    concatMap((payload: Product) =>
      this.productHttpService
        .updateProduct(payload).pipe(
          tap(() => {
            this.router.navigate(['/admin/products']);
          }),
          map(product => new ProductsActions.UpdateProductSuccess(product)),
          catchError(err => of(new ProductsActions.UpdateProductError(err)))
        )
    )
  );

  @Effect()
  createProduct$: Observable<Action> = this.actions$.pipe(
    ofType<ProductsActions.UpdateProduct>(ProductsActions.ProductsActionTypes.CREATE_PRODUCT),
    pluck('payload'),
    concatMap((payload: Product) =>
      this.productHttpService
        .createProduct(payload).pipe(
          tap(() => {
            this.router.navigate(['/admin/products']);
          }),
          map(product => new ProductsActions.CreateProductSuccess(product)),
          catchError(err => of(new ProductsActions.CreateProductError(err)))
        )
    )
  );

  @Effect()
  deleteProduct$: Observable<Action> = this.actions$.pipe(
    ofType<ProductsActions.DeleteProduct>(ProductsActions.ProductsActionTypes.DELETE_PRODUCT),
    pluck('payload'),
    concatMap((payload: Product) =>
      this.productHttpService
        .deleteProduct(payload).pipe(
          tap(() => {
            this.router.navigate(['/admin/products']);
          }),
          map(() => new ProductsActions.DeleteProductSuccess(payload)),
          catchError(err => of(new ProductsActions.DeleteProductError(err)))
        )
    )
  );
}
