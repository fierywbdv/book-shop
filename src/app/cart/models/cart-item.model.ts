import { BookItemModel } from '@books/models/book-item.model';

export interface CartItemModel extends BookItemModel {
  count?: number;
}
