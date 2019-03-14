import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/product';
import { Products } from './../../../product/services';

@Component({
  selector: 'app-manage-product-form',
  templateUrl: './manage-product-form.component.html',
  styleUrls: ['./manage-product-form.component.css']
})
export class ManageProductFormComponent implements OnInit {
  product: Product;
  isCreated = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: Products,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('productId');

    if (id) {
      this.product = this.productService.getProductById(id);
      this.isCreated = false;
    } else {
      this.product = new Product();
      this.product.id = this.productService.generateId();
    }
  }

  onSaveProduct() {
    const product = { ...this.product };

    if (!this.isCreated) {
      this.productService.updateProduct(product);
    } else {
      this.productService.createProduct(product);
    }

    this.onGoBack();
  }

  onRemove() {
    this.productService.removeProduct(this.product);
    this.onGoBack();
  }

  onGoBack(): void {
    this.router.navigate(['/admin/products']);
  }
}
