import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject, InjectionToken } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

import { AppRoutingModule } from 'app/app-routing.module';
import { AppMainNavComponent } from 'app/app-main-nav/app-main-nav.component';
import { AppComponent } from 'app/app.component';
import { environment } from 'app/core/environment.prod';
import { CoreModule } from 'app/core/core.module';
import { ProdService } from 'app/prod.service';
import { LanguageSwitcherComponent } from 'app/language-switcher/language-switcher.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment as envi } from '../environments/environment';
import { AddAttrDirective } from 'app/home/add-attr.directive';

// 步驟 1 for google analytics
export const EnvironmentToken = new InjectionToken('ENVIRONMENT');

// 步驟 2
declare let gtag: Function;

@NgModule({
  declarations: [
    AppComponent,
    AppMainNavComponent,
    LanguageSwitcherComponent,
    AddAttrDirective,
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
    MatListModule,
    // the path of ngsw-worker.js should be relative coz we have base href set in index.html
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: envi.production })
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
