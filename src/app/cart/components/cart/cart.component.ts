import { Product } from 'src/app/product/models/product.model';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { CartService } from './../../service/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  constructor(private cartService: CartService) { }

  items = [];
  sub$: Subscription;

  ngOnInit() {
    this.sub$ = this.cartService.channel$.subscribe((data: Product) => this.items.push(data));
  }

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }

}
