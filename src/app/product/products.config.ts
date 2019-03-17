import { InjectionToken } from '@angular/core';

const productsBaseUrl = 'http://localhost:3000/products';
export const ProductsApi = new InjectionToken<string>('ProductsApi');

export const ProductsApiProvider = {
  provide: ProductsApi,
  useValue: productsBaseUrl
};
