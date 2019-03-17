import { CoreModule } from 'src/app/core/core.module';
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, concatMap } from 'rxjs/operators';

import { ProductsApi } from '../products.config';
import { Product } from '../models';

@Injectable({
  providedIn: CoreModule
})
export class ProductHttpService {
  constructor(
    private http: HttpClient,
    @Inject(ProductsApi) private productsUrl: string
  ) {}

  getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.productsUrl)
      .pipe(catchError(this.handleError));
  }

  getProduct(id: number): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;

    return this.http.get<Product>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateProduct(product: Product): Observable<Product> {
    const url = `${this.productsUrl}/${product.id}`;
    const body = JSON.stringify(product);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http
      .put<Product>(url, body, options)
      .pipe(catchError(this.handleError));
  }

  createProduct(product: Product): Observable<Product> {
    const url = this.productsUrl;
    const body = JSON.stringify(product);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http
      .post<Product>(url, body, options)
      .pipe(catchError(this.handleError));
  }

  deleteProduct(product: Product) {
    const url = `${this.productsUrl}/${product.id}`;

    return this.http.delete(url)
      .pipe(concatMap(() => this.getProducts()));
  }

  generateId() {
    return Math.ceil(Math.random() * 100000);
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage: string;

    if (err.error instanceof Error) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}, body was: ${err.error}`;
    }

    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
