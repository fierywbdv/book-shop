import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersModule } from '@orders/orders.module';
import { MaterialModule } from '@material/material.module';
import { OnHoverColorizerDirective } from './directives/on-hover-colorizer/on-hover-colorizer.directive';
import { OnClickMarkerDirective } from './directives/on-click-marker/on-click-marker.directive';

@NgModule({
  declarations: [OnHoverColorizerDirective, OnClickMarkerDirective],
  imports: [CommonModule, MaterialModule, OrdersModule],
  exports: [
    CommonModule,
    MaterialModule,
    OrdersModule,
    OnHoverColorizerDirective,
    OnClickMarkerDirective,
  ],
})
export class SharedModule {}
