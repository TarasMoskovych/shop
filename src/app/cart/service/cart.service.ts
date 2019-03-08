import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from 'src/app/product/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private channel = new Subject<Product>();
  channel$ = this.channel.asObservable();

  dispatchData(data: Product) {
    this.channel.next(data);
  }
}
