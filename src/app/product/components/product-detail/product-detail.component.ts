import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from 'src/app/product';
import { ProductHttpService } from '../../services';
import { CartService } from 'src/app/cart';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  product: Product;
  sub$: Subscription;

  constructor(
    private productHttpService: ProductHttpService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.sub$ = this.productHttpService
      .getProduct(+this.route.snapshot.paramMap.get('productId'))
      .subscribe((product: Product) => this.product = product);
  }

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }

  onAddToCart(quantity: HTMLInputElement) {
    this.cartService.addItem(this.product, +quantity.value);
    quantity.value = '1';
  }
}
