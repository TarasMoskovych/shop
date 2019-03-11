import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { pipe } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Product } from 'src/app/product/models';
import { Products } from '../../services';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(private productService: Products, private route: ActivatedRoute) { }

  ngOnInit() {
    this.product = this.productService.getProductById(this.route.snapshot.paramMap.get('productId'));
  }

}
