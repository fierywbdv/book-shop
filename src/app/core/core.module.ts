import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { BooksModule } from '@books/books.module';
import { CartModule } from '@cart/cart.module';
import { BookShopComponent } from '@core/pages/book-shop/book-shop.component';
import { AboutComponent } from '@core/components/about/about.component';
import { HeaderComponent } from '@core/components/header/header.component';

@NgModule({
  declarations: [BookShopComponent, AboutComponent, HeaderComponent],
  imports: [SharedModule, BooksModule, CartModule],
  exports: [BookShopComponent, AboutComponent, HeaderComponent],
})
export class CoreModule {}
