import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from 'src/app/product';
import { ProductHttpService } from './../../../product/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-manage-product-form',
  templateUrl: './manage-product-form.component.html',
  styleUrls: ['./manage-product-form.component.css']
})
export class ManageProductFormComponent implements OnInit, OnDestroy {
  product: Product;
  isCreated = true;

  getProduct$: Subscription;
  saveProduct$: Subscription;
  deleteProduct$: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productHttpService: ProductHttpService,
  ) { }

  ngOnInit() {
    const id = +this.activatedRoute.snapshot.paramMap.get('productId');

    if (id) {
      this.getProduct$ = this.productHttpService.getProduct(id).subscribe(product => this.product = product);
      this.isCreated = false;
    } else {
      this.product = new Product();
      this.product.id = this.productHttpService.generateId();
    }
  }

  ngOnDestroy() {
    if (this.getProduct$) { this.getProduct$.unsubscribe(); }
    if (this.saveProduct$) { this.saveProduct$.unsubscribe(); }
    if (this.deleteProduct$) { this.deleteProduct$.unsubscribe(); }
  }

  onSaveProduct() {
    const product = { ...this.product };
    const method = !this.isCreated ? 'updateProduct' : 'createProduct';
    this.saveProduct$ = this.productHttpService[method](product)
      .subscribe(
        () => this.onGoBack(),
        error => console.log(error)
      );
  }

  onRemove() {
    this.deleteProduct$ = this.productHttpService.deleteProduct(this.product)
      .subscribe(
        () => this.onGoBack(),
        error => console.log(error)
      );
  }

  onGoBack(): void {
    this.router.navigate(['/admin/products']);
  }
}
