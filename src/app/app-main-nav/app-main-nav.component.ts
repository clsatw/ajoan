import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { NavigationEnd, Router, RouterEvent, NavigationCancel, NavigationError, NavigationStart, Event } from '@angular/router';

import { locales } from 'app/language-switcher/locales.value';
import { ThemeService } from '../core/services/theme.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './app-main-nav.component.html',
  styleUrls: ['./app-main-nav.component.css']
})
export class AppMainNavComponent {
  locales = [];
  localeId = '';
  loading: boolean;
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

  constructor(@Inject(LOCALE_ID) localeId: string,
    private themeService: ThemeService,
    private breakpointObserver: BreakpointObserver,
    private router: Router) {

    this.localeId = localeId;
    this.locales = locales;
    router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);
    });
  }

  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }
    if (routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError) {
      this.loading = false;
    }
  }

  toggleDarkTheme(checked: boolean) {
    console.log(checked);
    this.themeService.setDarkTheme(checked);
  }
}
