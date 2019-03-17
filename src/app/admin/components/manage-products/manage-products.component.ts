import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ProductHttpService } from 'src/app/product/services';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  products$: Observable<Array<Product>>;

  constructor(
    private productHttpService: ProductHttpService,
    private router: Router
  ) { }

  ngOnInit() {
    this.products$ = this.productHttpService.getProducts();
  }

  onProductClick(product: Product) {
    this.router.navigate([`admin/products/edit/${product.id}`]);
  }

  onCreateNewProduct() {
    this.router.navigate([`admin/products/create`]);
  }
}
