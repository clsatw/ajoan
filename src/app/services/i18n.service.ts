import { Injectable, Inject, LOCALE_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  localeId = '';
  constructor(@Inject(LOCALE_ID) localeId: string) {
    this.localeId = localeId;
  }
  getLocaleId() {
    console.log('localeId', this.localeId);
    return this.localeId;
  }
}
