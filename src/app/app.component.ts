import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

import { APP_TITLE } from 'src/app/common/constants';
import { mockBooksList } from 'src/app/mock-books/mock-books';
import { BookModel } from 'src/app/models/book.model';
import { CartItemModel } from 'src/app/models/cartItem.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('appTitle') appTitle: ElementRef;

  booksList: BookModel[];

  cartList: CartItemModel[];

  constructor(private _renderer: Renderer2) {}

  ngOnInit(): void {
    this.booksList = this._getMockBooksList();
    this.cartList = [];
  }

  ngAfterViewInit(): void {
    this._renderer.setProperty(this.appTitle.nativeElement, 'textContent', APP_TITLE);
  }

  private _getMockBooksList(): BookModel[] {
    return mockBooksList;
  }

  onAddBookToCart(bookItem: BookModel): void {
    const purshachedCartItemIndex = this.cartList.findIndex(
      (cartItem) => cartItem.name === bookItem.name,
    );

    if (purshachedCartItemIndex !== -1) {
      this.cartList[purshachedCartItemIndex] = { ...this.cartList[purshachedCartItemIndex] };
      this.cartList[purshachedCartItemIndex].count += 1;
    } else {
      const purshachedCartItem: CartItemModel = bookItem;
      purshachedCartItem.count = 1;
      this.cartList.push(purshachedCartItem);
    }

    this.cartList = [...this.cartList];
  }

  onDeleteBookFromCart($event: string): void {
    this.cartList = this.cartList.filter((cartItem: CartItemModel, index: number) => {
      if (cartItem.name === $event) {
        this.cartList[index].count = 0;
        return false;
      }
      return true;
    });
  }
}
