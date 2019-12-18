import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';

import { I18nService } from 'app/services/i18n.service';

import { Prod } from 'app/core/models/prod';
import { PRODS_EN } from 'app/core/models/mock-prods-en';
import { PRODS_ZH_HANT } from 'app/core/models/mock-prods-zh-hant';
import { PRODS_ZH_HANS } from 'app/core/models/mock-prods-zh-hans';

import { Faq } from 'app/core/models/faq';
import { FAQ_EN } from 'app/core/models/mock-faq-en';
import { FAQ_ZH_HANT } from 'app/core/models/mock-faq-zh-hant';
import { FAQ_ZH_HANS } from 'app/core/models/mock-faq-zh-hans';

@Injectable({
  providedIn: 'root'
})
export class ProdService {
  localeID: string;
  PRODS: Prod[];
  FAQ: Faq[];

  constructor(private n18iService: I18nService, public matSnackBar: MatSnackBar) {
    this.localeID = this.n18iService.getLocaleId();
    if (this.localeID === 'zh-hant') {
      this.PRODS = PRODS_ZH_HANT;
      this.FAQ = FAQ_ZH_HANT;
    } else if (this.localeID === 'zh-hans') {
      this.PRODS = PRODS_ZH_HANS;
      this.FAQ = FAQ_ZH_HANS;
    } else {
      this.PRODS = PRODS_EN;
      this.FAQ = FAQ_EN;
    }
  }

  getFaqs(): Observable<Faq[]> {
    return of(this.FAQ);
  }

  getProds(): Observable<Prod[]> {
    // this.matSnackBar.open('fetched product', 'OK', { duration: 2000, });
    console.log('id: ', this.localeID);
    return of(this.PRODS);
  }

  /** GET hero by id. Will 404 if id not found
   * Gets prod
   * @param id
   * @returns prod
   */
  getProd(id: number): Observable<Prod> {
    return of(this.PRODS.find(prod => prod.id === id));
  }
}
