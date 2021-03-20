import { Component } from '@angular/core';

import { ORDER_BY_PROPERTY_LIST } from '@app/common/constants';
import { CartItemModel } from '@cart/models/cart-item.model';
import { CartService } from '@cart/services/cart/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent {
  isCartListNotEmpty = false;

  orderByPropertyList = ORDER_BY_PROPERTY_LIST;

  orderByProperty = '';

  isOrderByDeacreasing = true;

  get cartList(): CartItemModel[] {
    return this.cartService.cartProduct;
  }

  get cartTotalSum(): number {
    return this.cartService.totalSum;
  }

  get cartTotalQuantity(): number {
    this.isCartListNotEmpty = Boolean(this.cartService.totalQuantity);
    return this.cartService.totalQuantity;
  }

  constructor(private cartService: CartService) {}
}
