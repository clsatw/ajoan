import { Injectable, Inject, LOCALE_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class N18iService {
  localeId = '';
  constructor(@Inject(LOCALE_ID) localeId: string) {
    this.localeId = localeId;
  }
  getLocaleId() {
    console.log('localeId', this.localeId);
    return this.localeId;
  }
}
