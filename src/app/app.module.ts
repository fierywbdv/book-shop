import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { BookShopComponent } from './components/book-shop/book-shop.component';
import { AboutComponent } from './components/about/about.component';
import { BooksService } from './services/books/books.service';
import { CartService } from './services/cart/cart.service';
import { LocalStorageService } from './services/local-storage/local-storage.service';
import { ConfigOptionsService } from './services/config-options/config-options.service';
import { ConstantsService, APP_DESCRIPTION } from './services/constants/constants.service';
import { GeneratorService, StringGeneratorService } from './services/generator/generator.service';
import { GeneratorFactory } from './common/helper';

@NgModule({
  declarations: [
    AppComponent,
    BookItemComponent,
    BookShopComponent,
    CartItemComponent,
    CartListComponent,
    BookListComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    AppRoutingModule,
  ],
  providers: [
    BooksService,
    CartService,
    { provide: LocalStorageService, useClass: LocalStorageService },
    ConfigOptionsService,
    GeneratorService,
    { provide: ConstantsService, useValue: APP_DESCRIPTION },
    { provide: StringGeneratorService, useFactory: GeneratorFactory, deps: [GeneratorService] },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
