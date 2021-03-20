import { BookItemModel } from './book-item.model';

export interface CartItemModel extends BookItemModel {
  count?: number;
}
