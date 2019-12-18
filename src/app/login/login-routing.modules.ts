import { LoginComponent } from 'app/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
