import { Product } from 'src/app/product/models';

export interface ICartItem {
  key: Product;
  value: number;
}
