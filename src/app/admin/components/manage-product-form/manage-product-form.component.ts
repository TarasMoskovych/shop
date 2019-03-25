import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { CustomValidators } from 'src/app/validators';
import { AppState, getProductsData, getSelectedProduct } from 'src/app/core/+store';
import { Product, Category } from 'src/app/product';
import { ProductHttpService } from './../../../product/services';
import * as ProductsActions from './../../../core/+store/products/products.actions';

declare var M: any;

@Component({
  selector: 'app-manage-product-form',
  templateUrl: './manage-product-form.component.html',
  styleUrls: ['./manage-product-form.component.css']
})
export class ManageProductFormComponent implements OnInit, OnDestroy, AfterViewInit {
  productForm: FormGroup;
  categories: Array<string> = ['Smartphone', 'Multi SIM', 'Fablet', 'Protected', 'Fashion'];

  product: Product;
  productId: number;
  isCreated = true;

  products$: Observable<ReadonlyArray<Product>>;
  sub$: Subscription;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productHttpService: ProductHttpService,
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.buildForm();

    this.products$ = this.store.pipe(select(getProductsData));
    this.productId = +this.activatedRoute.snapshot.paramMap.get('productId');

    if (this.productId) {
      this.sub$ = this.store.pipe(select(getSelectedProduct)).subscribe(product => {
        this.product = product;

        if (this.product) {
          this.setFormValue(product);
        }
      });
      this.store.dispatch(new ProductsActions.GetProduct(this.productId));
      this.isCreated = false;
    } else {
      this.product = new Product();
      this.setId(this.productHttpService.generateId());
    }
  }

  ngOnDestroy() {
    if (this.sub$) { this.sub$.unsubscribe(); }
  }

  ngAfterViewInit() {
    // M.AutoInit();
    setTimeout(() => M.AutoInit(), 200);
  }

  onSaveProduct() {
    const product = this.productForm.getRawValue();

    if (this.productId) {
      this.store.dispatch(new ProductsActions.UpdateProduct(product));
    } else {
      this.store.dispatch(new ProductsActions.CreateProduct(product));
    }
  }

  onRemove() {
    this.store.dispatch(new ProductsActions.DeleteProduct(this.product));
  }

  onGoBack(): void {
    this.router.navigate(['/admin/products']);
  }

  private buildForm() {
    this.productForm = this.fb.group({
      id: { value: '', disabled: true },
      name: ['', [Validators.required, Validators.minLength(3)] ],
      description: ['', [Validators.required, Validators.minLength(5)] ],
      price: this.fb.control('', { validators: [Validators.required, CustomValidators.priceRuleRange(1, 10000)], updateOn: 'blur' }),
      category: Category.Smartphone,
      isAvailable: true,
      photo: ''
    });
  }

  private setFormValue({ id, name, description, price, category, isAvailable, photo }: Product) {
    this.productForm.setValue({ id, name, description, price, category, isAvailable, photo });
  }

  private setId(id: number) {
    this.productForm.patchValue({ id });
  }
}
