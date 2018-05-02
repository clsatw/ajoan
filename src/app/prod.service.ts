import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

import { Prod } from './core/models/prod';
import { PRODS } from './core/models/mock-prods';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ProdService {

  constructor(public matSnackBar: MatSnackBar) { }
  getProds(): Observable<Prod[]> {
    // this.matSnackBar.open('fetched product', 'OK', { duration: 2000, });
    return of(PRODS);
  }
  /** GET hero by id. Will 404 if id not found */
  getProd(id: number): Observable<Prod> {
    return of(PRODS.find(prod => prod.id === id));
  }
}
