import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';

import { BookItemComponent } from '@books/components/book-item/book-item.component';
import { BookListComponent } from '@books/pages/book-list/book-list.component';
@NgModule({
  declarations: [BookItemComponent, BookListComponent],
  imports: [SharedModule],
  exports: [BookListComponent],
})
export class BooksModule {}
