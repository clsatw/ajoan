import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
    // loadChildren: 'app/home/home.module#HomeModule'
  },
  {
    path: 'products',
    loadChildren: 'app/customers/customers.module#CustomersModule'
  },
  {
    path: 'orders',
    loadChildren: 'app/orders/orders.module#OrdersModule'
  },
  {
    path: 'support',
    loadChildren: 'app/support/support.module#SupportModule'
  },
  {
    path: 'about',
    loadChildren: 'app/about/about.module#AboutModule'
  },
  /*
  { path: 'login',
    loadChildren: 'app/login/login.module#LoginModule'
  },
  */
  // {path: '**',
  // loadChildren: 'app/PageNotFound.module#PageNotFoundModule}
];
// {enableTracing: true}
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
