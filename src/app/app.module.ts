import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject, InjectionToken } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { ProdService } from './prod.service';

import { AppMainNavComponent } from './app-main-nav/app-main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { environment } from './core/environment.prod';

// 步驟 1
export const EnvironmentToken = new InjectionToken('ENVIRONMENT');

// 步驟 2
declare let gtag: Function;

@NgModule({
  declarations: [
    AppComponent,
    AppMainNavComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [
    ProdService,
    { provide: EnvironmentToken, useValue: environment },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(@Inject(EnvironmentToken) private env: any) {
    // 步驟 3
    gtag('config', this.env.google.GA_TRACKING_ID);
  }
 }
