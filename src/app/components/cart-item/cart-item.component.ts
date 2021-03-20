import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CART_ITEM_COUNT } from 'src/app/common/constants';

import { CartItemModel } from 'src/app/models/cartItem.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent {
  @Input() cartItem: CartItemModel;

  @Output() deleteCartItemEvent: EventEmitter<string> = new EventEmitter<string>();

  decreaseCartItemCount(): void {
    this.cartItem.count -= 1;
    this._verifyCartItemCount();
  }

  increaseCartItemCount(): void {
    this.cartItem.count += 1;
    this._verifyCartItemCount();
  }

  deleteCartItem(): void {
    this.deleteCartItemEvent.emit(this.cartItem.name);
  }

  private _verifyCartItemCount(): void {
    if (this.cartItem.count < CART_ITEM_COUNT.MIN) {
      this.cartItem.count = CART_ITEM_COUNT.MIN;
      return;
    }
    if (this.cartItem.count > CART_ITEM_COUNT.MAX) {
      this.cartItem.count = CART_ITEM_COUNT.MAX;
    }
  }
}
