import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { mockBooksList } from '@books/mock-books/mock-books';
import { BookItemModel } from '@books/models/book-item.model';

@Injectable()
export class BooksService {
  getBooks(): Observable<BookItemModel[]> {
    return of(mockBooksList);
  }
}
