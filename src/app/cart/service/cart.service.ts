import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from 'src/app/product/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private channel = new Subject<Product>();
  channel$ = this.channel.asObservable();

  dispatchData(data: Product) {
    this.channel.next(data);
  }

  calculateTotalPrice(products: Array<Product>) {
    return products.reduce((acc: number, current: any) => acc + current.product.price * +current.quantity, 0);
  }

  calculateTotalItems(products: Array<Product>) {
    return products.length;
  }
}
