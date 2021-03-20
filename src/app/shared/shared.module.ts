import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersModule } from '@orders/orders.module';
import { MaterialModule } from '@material/material.module';

@NgModule({
  imports: [CommonModule, MaterialModule, OrdersModule],
  exports: [CommonModule, MaterialModule, OrdersModule],
})
export class SharedModule {}
