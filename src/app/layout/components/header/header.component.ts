import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { MinicartToggleService } from './../../../core';
import { CartService, CartSummary } from './../../../cart';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('appTitle') title: ElementRef<HTMLElement>;

  quantity = 0;
  items: Map<Product, number>;
  summary: CartSummary;
  sub$: Subscription;
  items$: Subscription;

  constructor(private cartService: CartService, private router: Router, private minicartService: MinicartToggleService) { }

  ngOnInit() {
    this.summary = this.cartService.getCartSummary();

    this.sub$ = this.cartService.channel$.subscribe((product: Product) => {
      this.items = this.cartService.addItem(product);
    });
  }

  ngAfterViewInit() {
    this.title.nativeElement.textContent = 'Shop App';
  }

  onShoppingCartToggle() {
    if (this.minicartService.isMinicartShown) {
      this.router.navigate([{ outlets: { view: null } }]);
    }
  }
}
