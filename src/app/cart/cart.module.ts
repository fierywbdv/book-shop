import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '@shared/shared.module';
import { CartItemComponent } from '@cart/components/cart-item/cart-item.component';
import { CartListComponent } from '@cart/pages/cart-list/cart-list.component';

@NgModule({
  declarations: [CartItemComponent, CartListComponent],
  imports: [SharedModule, FormsModule],
  exports: [CartListComponent],
})
export class CartModule {}
