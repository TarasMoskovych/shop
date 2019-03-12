import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { CartSummary } from './../../models';
import { CartService } from './../../services';
import { MinicartToggleService } from 'src/app/core/services';

@Component({
  selector: 'app-mini-cart',
  templateUrl: './mini-cart.component.html',
  styleUrls: ['./mini-cart.component.css']
})
export class MiniCartComponent implements OnInit, OnDestroy {
  summary: CartSummary;

  constructor(
    public cartService: CartService,
    private minicartService: MinicartToggleService,
    private router: Router
  ) { }

  ngOnInit() {
    this.minicartService.isMinicartShown = true;
    this.summary = this.cartService.getCartSummary();
  }

  ngOnDestroy() {
    this.minicartService.isMinicartShown = false;
  }

  onProductClick(id: number | string) {
    Promise.resolve()
      .then(() => this.router.navigate([{ outlets: { view: null } }]))
      .then(() => this.router.navigate(['/products/', id]));
  }

  onViewCart() {
    Promise.resolve()
      .then(() => this.router.navigate([{ outlets: { view: null } }]))
      .then(() => this.router.navigate(['/cart']));
  }

  onClearCart() {
    this.cartService.clearCart();
  }
}
