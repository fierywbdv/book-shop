import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CartItemModel } from 'src/app/models/cart-item.model';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent {
  @Input() cartItem: CartItemModel;

  constructor(private cartService: CartService) {}

  onDecreaseButtonClick(name: string = this.cartItem.name): void {
    this.cartService.decreaseQuantity(name);
  }

  onIncreaseButtonClick(name: string = this.cartItem.name): void {
    this.cartService.increaseQuantity(name);
  }

  onDeleteButtonClick(name: string = this.cartItem.name): void {
    this.cartService.removeBook(name);
  }

  onMouseWheelOverCartItemCountInput($event: WheelEvent): void {
    if ($event.deltaY < 0) {
      this.onIncreaseButtonClick();
    } else {
      this.onDecreaseButtonClick();
    }

    $event.preventDefault();
  }
}
