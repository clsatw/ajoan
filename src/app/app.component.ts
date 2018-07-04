import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router} from '@angular/router';
import { distinctUntilChanged } from 'rxjs/operators';
import { SwUpdate } from '@angular/service-worker';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';

import { ThemeService } from './core/services/theme.service';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isDarkTheme: Observable<boolean>;
  constructor(private themeService: ThemeService, private swUpdate: SwUpdate, private router: Router) {}

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme.pipe(startWith(true));

    this.router.events
      .pipe(
        distinctUntilChanged((previous: any, current: any) => {
          if (current instanceof NavigationEnd) {
            return previous.url === current.url;
          }
          return true;
        })
      )
      .subscribe((x: any) => {
        gtag('event', 'page_view', { page_path: x.url });
      });

      if (this.swUpdate.isEnabled) {
        this.swUpdate.available.subscribe(() => {
            if (confirm('New version available. Load New Version?')) {
                window.location.reload();
            }
        });
    }
  }
}
