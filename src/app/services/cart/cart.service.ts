import { Injectable } from '@angular/core';
import { CART_ITEM_COUNT, DEFAULT_INIT_BOOK_COUNT } from 'src/app/common/constants';

import { BookItemModel } from 'src/app/models/book-item.model';
import { CartItemModel } from 'src/app/models/cart-item.model';

@Injectable()
export class CartService {
  cartProduct: CartItemModel[] = [];

  totalQuantity = 0;

  totalSum = 0;

  getTotalProducts(): number {
    return this.cartProduct.length;
  }

  addBook(bookItem: BookItemModel, initCount = DEFAULT_INIT_BOOK_COUNT): void {
    const purshachedCartItemIndex = this.cartProduct.findIndex(
      (cartItem) => cartItem.name === bookItem.name,
    );
    if (purshachedCartItemIndex !== -1) {
      this.cartProduct[purshachedCartItemIndex] = { ...this.cartProduct[purshachedCartItemIndex] };
      this.cartProduct[purshachedCartItemIndex].count += 1;
    } else {
      const purshachedCartItem: CartItemModel = bookItem;
      purshachedCartItem.count = initCount;
      this.cartProduct.push(purshachedCartItem);
    }

    this.cartProduct = [...this.cartProduct];
    this._updateCartData();
  }

  removeBook($event: string): void {
    this.cartProduct = this.cartProduct.filter((cartItem: CartItemModel, index: number) => {
      if (cartItem.name === $event) {
        this.cartProduct[index].count = 0;
        return false;
      }
      return true;
    });
    this._updateCartData();
  }

  decreaseQuantity(name: string): void {
    const currentCartItemIndex = this._getCurrentCartItemIndex(name);

    this.cartProduct[currentCartItemIndex].count -= 1;
    this._verifyQuantity(currentCartItemIndex);
    this._updateCartData();
  }

  increaseQuantity(name: string): void {
    const currentCartItemIndex = this._getCurrentCartItemIndex(name);

    this.cartProduct[currentCartItemIndex].count += 1;
    this._verifyQuantity(currentCartItemIndex);
    this._updateCartData();
  }

  removeAllBooks(): void {
    this.cartProduct = [];
    this._updateCartData();
  }

  private _getCurrentCartItemIndex(name: string): number {
    return this.cartProduct.findIndex((cartItem: CartItemModel) => cartItem.name === name);
  }

  private _verifyQuantity(currentCartItemIndex: number): void {
    if (this.cartProduct[currentCartItemIndex].count < CART_ITEM_COUNT.MIN) {
      this.cartProduct[currentCartItemIndex].count = CART_ITEM_COUNT.MIN;
      return;
    }
    if (this.cartProduct[currentCartItemIndex].count > CART_ITEM_COUNT.MAX) {
      this.cartProduct[currentCartItemIndex].count = CART_ITEM_COUNT.MAX;
    }
  }

  private _updateCartData(): void {
    this.totalSum = 0;
    this.totalQuantity = 0;
    this.cartProduct.forEach((carItem: CartItemModel) => {
      this.totalQuantity += carItem.count;
      this.totalSum += carItem.count * carItem.price;
    });
  }
}
