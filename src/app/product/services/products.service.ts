import { Injectable } from '@angular/core';
import { Product, Category } from './../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class Products {

  constructor() { }

  getItems(): Array<Product> {
    return [
      new Product(
        'Xiaomi Redmi Note 6 Pro',
        '6.26 inch 4G Phablet Global Version - Black 282004001 4GB RAM 64GB ROM 12.0MP + 5.0MP Rear Camera Fingerprint Sensor',
        199.99,
        Category.Smartphone,
        true,
        'data:image/jpeg;base64,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'
      ),
      new Product(
        'Lenovo S5 Pro',
        '4G Phablet Global Version 6GB RAM - Black 414558101 64GB ROM Quad Camera Fingerprint Sensor',
        210,
        Category.Fashion,
        false
      ),
      new Product(
        'ASUS ZenFone Max Pro',
        '6GB RAM 4G Phablet Global Version - Black 279110201 6GB RAM 64GB ROM 5.0MP + 16.0MP Rear Camera Fingerprint Sensor',
        199.99,
        Category.Fablet,
        true
      ),
      new Product(
        'Discovery V8 3G Smartphone',
        '4.0 inch Android 4.4 WiFi / GPS / Waterproof / Dustproof / Shockproof / WVGA Screen / 4GB ROM',
        65,
        Category.Protected,
        true
      )
    ];
  }
}
