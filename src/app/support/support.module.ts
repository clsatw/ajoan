import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportRoutingModule } from 'app/support/support-routing.module';
import { SupportComponent } from 'app/support/support.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SupportRoutingModule
  ],
  declarations: [SupportComponent]
})
export class SupportModule { }
