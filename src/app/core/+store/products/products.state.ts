import { Product, Category } from './../../../product';

export interface ProductsState {
  data: ReadonlyArray<Product>;
  selectedProduct: Readonly<Product>;
  readonly loading: boolean;
  readonly loaded: boolean;
  readonly error: Error | string;
}

export const initialProductsState: ProductsState = {
    data: [],
    selectedProduct: null,
    loading: false,
    loaded: false,
    error: null
};
