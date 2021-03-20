import { Injectable } from '@angular/core';

import { mockBooksList } from 'src/app/mock-books/mock-books';
import { BookItemModel } from 'src/app/models/book-item.model';

@Injectable()
export class BooksService {
  getBooks(): BookItemModel[] {
    return mockBooksList;
  }
}
