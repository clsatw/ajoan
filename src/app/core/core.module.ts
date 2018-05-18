import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule  // coz we use <router-outlet>
  ],
  declarations: [],
  // exports: [ToolbarComponent],
  // providers: [ToastService]
})
export class CoreModule { }
