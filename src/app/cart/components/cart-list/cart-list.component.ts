import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CartService } from '../../service/cart.service';
import { Product } from './../../../product/models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  constructor(private cartService: CartService) { }

  items = [];
  count = 0;
  sum = 0;
  sub$: Subscription;

  ngOnInit() {
    this.sub$ = this.cartService.channel$.subscribe((product: Product) => {
      this.addProduct(product);
      this.sum = this.cartService.calculateTotalPrice(this.items);
    });
  }

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }

  onUpdateQuantity({ product, quantity }) {
    if (+quantity === 0) {
      this.removeProduct(product);
      return;
    }

    this.items.find(item => item.product === product).quantity = quantity;
    this.sum = this.cartService.calculateTotalPrice(this.items);
  }

  onRemove(product: Product) {
    this.removeProduct(product);
    this.sum = this.cartService.calculateTotalPrice(this.items);
    this.count = this.cartService.calculateTotalItems(this.items);
  }

  private addProduct(product: Product) {
    const tempProduct = this.items.find(item => item.product === product);
    tempProduct ? tempProduct.quantity++ : this.items.push({ product, quantity: 1 });
    this.count = this.cartService.calculateTotalItems(this.items);
  }

  private removeProduct(product: Product) {
    this.items.splice(this.items.indexOf(product), 1);
  }
}
