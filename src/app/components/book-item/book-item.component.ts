import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { BookItemModel } from 'src/app/models/book-item.model';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookItemComponent {
  @Input() bookItem: BookItemModel;

  constructor(private cartService: CartService) {}

  onAddBookToCartButtonClick(bookItem: BookItemModel): void {
    this.cartService.addBook(bookItem);
  }
}
