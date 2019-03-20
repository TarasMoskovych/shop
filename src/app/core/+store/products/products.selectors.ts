import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ProductsState } from './products.state';
export const getProductsState = createFeatureSelector<ProductsState>('products');

export const getProductsData = createSelector(getProductsState, (state: ProductsState) => state.data);
export const getProductsError = createSelector(getProductsState, (state: ProductsState) => state.error);
export const getSelectedProduct = createSelector(getProductsState, (state: ProductsState) => state.selectedProduct);
export const getProductsLoaded = createSelector(getProductsState, (state: ProductsState) => state.loaded);
