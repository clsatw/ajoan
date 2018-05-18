import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from 'app/orders/orders-routing.module';
import { OrderListComponent } from 'app/orders/order-list/order-list.component';
// import { MyMaterialModule } from '../shared/app-custom-materia.module';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    OrdersRoutingModule,
  ],
  declarations: [OrderListComponent]
})
export class OrdersModule { }
