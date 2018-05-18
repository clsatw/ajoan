import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from 'app/customers/customers-routing.module';
import { CustomerListComponent } from 'app/customers/customer-list/customer-list.component';
import { SharedModule } from 'app/shared/shared.module';
import { DashboardComponent } from 'app/customers/dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CustomersRoutingModule
  ],
  declarations: [CustomerListComponent, DashboardComponent]
})
export class CustomersModule { }
