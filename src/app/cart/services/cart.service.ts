import { Injectable } from '@angular/core';
import { Subject, Observable, Subscriber } from 'rxjs';

import { Product } from 'src/app/product/models';
import { ICartItem, CartSummary } from './../models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private channel = new Subject<Product>();
  private items = new Map();
  private summary: CartSummary = {
    count: 0,
    totalPrice: 0
  };

  channel$ = this.channel.asObservable();

  constructor() { }

  dispatchData(data: Product) {
    this.channel.next(data);
  }

  getItems(): Observable<Map<Product, number>> {
    return new Observable<Map<Product, number>>((observer: Subscriber<Map<Product, number>>) => {
      observer.next(this.items);
    });
  }

  getCartSummary() {
    return this.summary;
  }

  setCount(value: number) {
    this.summary.count = value;
  }

  setTotalPrice(value: number) {
    this.summary.totalPrice = value;
  }

  addItem(product: Product, quantity = 1) {
    if (this.items.has(product)) {
      this.items.set(product, this.items.get(product) + 1);
    } else {
      this.items.set(product, quantity);
    }

    this.recalculateTotals(this.items);
    return new Map(this.items);
  }

  updateQuantity(item: ICartItem, quantity: number) {
    if (+quantity === 0) {
      this.removeItem(item);
    }

    if (this.items.has(item.key)) {
      this.items.set(item.key, quantity);
    }

    this.recalculateTotals(this.items);
    return new Map(this.items);
  }

  clearCart() {
    this.items.clear();
  }

  removeItem(item: ICartItem) {
    this.items.delete(item.key);

    this.recalculateTotals(this.items);
    return new Map(this.items);
  }

  recalculateTotalPrice(items: Map<Product, number>) {
    if (!this.isEmptyItems()) {
      let total = 0;
      Array.from(items.entries()).forEach(item => total += item[0].price * item[1]);

      this.setTotalPrice(total);
    }
  }

  recalculateTotalItems(items: Map<Product, number>) {
    if (!this.isEmptyItems()) {
      this.setCount(Array.from(items.values()).reduce((acc, current) => acc + current));
    }
  }

  recalculateTotals(items: Map<Product, number>) {
    this.recalculateTotalItems(items);
    this.recalculateTotalPrice(items);
  }

  isEmptyItems() {
    return this.items.size === 0;
  }
}
