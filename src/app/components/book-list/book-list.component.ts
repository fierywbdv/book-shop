import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { BookItemModel } from 'src/app/models/book-item.model';
import { BooksService } from 'src/app/services/books/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookListComponent implements OnInit {
  booksList: BookItemModel[];

  constructor(private bookService: BooksService) {}

  ngOnInit(): void {
    this.booksList = this.bookService.getBooks();
  }

  trackFunction(index, item) {
    return item ? item.name : null;
  }
}
