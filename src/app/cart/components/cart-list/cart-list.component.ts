import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CartService } from '../../services';
import { ICartItem, CartSummary } from './../../models';
import { Product } from './../../../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  items: Map<Product, number>;
  summary: CartSummary;
  sub$: Subscription;
  items$: Subscription;
  mockData: Map<Product, number>;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.items$ = this.cartService.getItems().subscribe((data: Map<Product, number>) => {
      this.items = data;
    });

    this.summary = this.cartService.getCartSummary();

    this.sub$ = this.cartService.channel$.subscribe((product: Product) => {
      this.items = this.cartService.addItem(product);
    });

    this.mockData = new Map(JSON.parse(localStorage.getItem('products')));
  }

  ngOnDestroy() {
    this.sub$.unsubscribe();
    this.items$.unsubscribe();
  }

  onUpdateQuantity({ item, quantity }) {
    this.items = this.cartService.updateQuantity(item, +quantity);
  }

  onRemove(item: ICartItem) {
    this.items = this.cartService.removeItem(item);
  }
}
