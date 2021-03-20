import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from '@core/core.module';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { BooksService } from '@books/services/books/books.service';
import { CartService } from '@cart/services/cart/cart.service';
import { ConfigOptionsService } from '@core/services/config-options/config-options.service';
import { ConstantsServiceProvider } from '@core/services/constants/constants.service';
import { LocalStorageServiceProvider } from '@core/services/local-storage/local-storage.service';
import {
  GeneratorService,
  StringGeneratorServiceProvider,
} from '@core/services/generator/generator.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, CoreModule, AppRoutingModule],
  providers: [
    BooksService,
    CartService,
    ConfigOptionsService,
    GeneratorService,
    ConstantsServiceProvider,
    LocalStorageServiceProvider,
    StringGeneratorServiceProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
