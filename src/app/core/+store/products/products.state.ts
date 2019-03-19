import { Product, Category } from './../../../product';

export interface ProductsState {
  data: ReadonlyArray<Product>;
}

export const initialProductsState: ProductsState = {
    data: [
      new Product(1, 'Name', 'Description', 100, Category.Fablet, true),
      new Product(1, 'Name2', 'Description', 200, Category.Fablet, true),
      new Product(1, 'Name3', 'Description', 300, Category.Fablet, false)
    ]
};
