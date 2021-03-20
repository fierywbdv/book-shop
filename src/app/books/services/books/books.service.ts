import { Injectable } from '@angular/core';

import { mockBooksList } from '@books/mock-books/mock-books';
import { BookItemModel } from '@books/models/book-item.model';

@Injectable()
export class BooksService {
  getBooks(): BookItemModel[] {
    return mockBooksList;
  }
}
