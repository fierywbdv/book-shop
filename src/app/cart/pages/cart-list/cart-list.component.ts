import { Component } from '@angular/core';

import { CartItemModel } from '@cart/models/cart-item.model';
import { CartService } from '@cart/services/cart/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent {
  get cartList(): CartItemModel[] {
    return this.cartService.cartProduct;
  }

  get cartTotalSum(): number {
    return this.cartService.totalSum;
  }

  get cartTotalQuantity(): number {
    return this.cartService.totalQuantity;
  }

  constructor(private cartService: CartService) {}

  trackFunction(index, item) {
    return item ? item.name : null;
  }
}
