import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
// import { MyMaterialModule } from '../shared/app-custom-materia.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    OrdersRoutingModule,
  ],
  declarations: [OrderListComponent]
})
export class OrdersModule { }
