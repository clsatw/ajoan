import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from 'app/customers/customer-list/customer-list.component';
import { DashboardComponent } from 'app/customers/dashboard/dashboard.component';

const routes: Routes = [
  {
    // Notice that the path is set to an empty string.
    // This is because the path in AppRoutingModule is already set to customers,
    // so this route in the CustomersRoutingModule, is already within the customers context.
    // Every route in this routing module is a child route.
    path: '',
    // component: CustomerListComponent
    component: DashboardComponent
  },
  {path: 'detail/:id', component: CustomerListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
