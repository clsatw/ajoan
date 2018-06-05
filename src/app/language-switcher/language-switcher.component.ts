import { Component, Inject, LOCALE_ID } from '@angular/core';
import { locales } from './locales.value';
@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
})
export class LanguageSwitcherComponent {
  locales = [];
  localeId = '';
  constructor(@Inject(LOCALE_ID) localeId: string) {
    this.localeId = localeId;
  }
}
