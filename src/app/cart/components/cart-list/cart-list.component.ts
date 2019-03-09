import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CartService } from '../../services';
import { ICartItem, CartSummary } from './../../models';
import { Product } from './../../../product/models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  items = new Map();
  summary: CartSummary;
  sub$: Subscription;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.summary = this.cartService.getCartSummary();

    this.sub$ = this.cartService.channel$.subscribe((product: Product) => {
      this.cartService.addItem(product);
    });
  }

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }

  onUpdateQuantity({ item, quantity }) {
    this.cartService.updateQuantity(item, +quantity);
  }

  onRemove(item: ICartItem) {
    this.cartService.removeItem(item);
  }
}
