import { Subscription } from 'rxjs';
import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

import { CartService } from './../../../cart/services';
import { Product } from 'src/app/product';
import { CartSummary } from './../../../cart/models';

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

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.items$ = this.cartService.getItems().subscribe((data: Map<Product, number>) => {
      this.items = data;
    });

    this.summary = this.cartService.getCartSummary();

    this.sub$ = this.cartService.channel$.subscribe((product: Product) => {
      this.items = this.cartService.addItem(product);
    });
  }

  ngAfterViewInit() {
    this.title.nativeElement.textContent = 'Shop App';
  }
}
