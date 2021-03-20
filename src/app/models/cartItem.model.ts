import { BookModel } from './book.model';

export interface CartItemModel extends BookModel {
  count?: number;
}
