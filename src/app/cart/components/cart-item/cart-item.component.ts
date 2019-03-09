import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

import { ICartItem } from './../../models';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit {
  @Input() item: ICartItem;
  @Input() index: number;

  @Output() updateQuantity: EventEmitter<{ item: ICartItem, quantity: number }>
                      = new EventEmitter<{ item: ICartItem, quantity: number }>();
  @Output() remove: EventEmitter<ICartItem> = new EventEmitter<ICartItem>();

  constructor() { }

  ngOnInit() {
  }

  onRemove(item: ICartItem) {
    this.remove.emit(item);
  }

  onUpdateQuantity(item: ICartItem, quantity: number) {
    this.updateQuantity.emit({ item, quantity });
  }
}
