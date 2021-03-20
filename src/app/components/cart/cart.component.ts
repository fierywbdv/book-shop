import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { CartItemModel } from 'src/app/models/cartItem.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  @Input() cartList: CartItemModel[];

  @Output() deleteCartItemEvent: EventEmitter<string> = new EventEmitter<string>();

  onDeleteCartItem($event: string): void {
    this.cartList = this.cartList.filter((cartItem: CartItemModel) => cartItem.name !== $event);
    this.deleteCartItemEvent.emit($event);
  }
}
