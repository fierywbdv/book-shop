import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersModule } from '@orders/orders.module';
import { MaterialModule } from '@material/material.module';
import { OnHoverColorizerDirective } from './directives/on-hover-colorizer/on-hover-colorizer.directive';
import { OnClickMarkerDirective } from './directives/on-click-marker/on-click-marker.directive';
import { OrderByPipe } from './pipes/order-by/order-by.pipe';

@NgModule({
  declarations: [OnHoverColorizerDirective, OnClickMarkerDirective, OrderByPipe],
  imports: [CommonModule, MaterialModule, OrdersModule],
  exports: [
    CommonModule,
    MaterialModule,
    OrdersModule,
    OnHoverColorizerDirective,
    OnClickMarkerDirective,
    OrderByPipe,
  ],
})
export class SharedModule {}
