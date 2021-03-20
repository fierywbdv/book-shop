import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { BookModel } from 'src/app/models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent {
  @Input() bookItem: BookModel;

  @Output() addBookToCartEvent: EventEmitter<BookModel> = new EventEmitter<BookModel>();

  addBookToCart(bookItem: BookModel): void {
    this.addBookToCartEvent.emit(bookItem);
  }
}
