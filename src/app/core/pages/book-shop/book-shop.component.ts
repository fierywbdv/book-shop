import { Component } from '@angular/core';

import { CartService } from '@cart/services/cart/cart.service';

@Component({
  selector: 'app-book-shop',
  templateUrl: './book-shop.component.html',
  styleUrls: ['./book-shop.component.scss'],
})
export class BookShopComponent {
  constructor(private cartService: CartService) {}

  get cartTotalProducts(): number {
    return this.cartService.getTotalProducts();
  }
}
