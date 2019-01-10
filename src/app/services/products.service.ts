import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { catchError, map, switchMap, mergeMap, tap, withLatestFrom } from 'rxjs/operators';

import * as fromApp from '../store/app.reducers';
import * as fromStore from '../store';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public products$: Observable<Product[]>;
  // public activeProduct$: Observable<Product>;
  public activeProduct$: Observable<any>;
  public activeProductVariant$: Observable<number>;
  public testing$: Observable<number>;


  constructor(private store: Store<fromApp.AppState>) {
    this.products$ = this.store.select(fromStore.getProducts);
    this.activeProduct$ = this.store.select(fromStore.getActiveProductItem);
    this.testing$ = this.store.select(fromStore.getTesting);
  }

  getProducts$() {
    return this.products$;
  }

  getActiveProduct$() {
    return this.activeProduct$;
  }

  getActiveProductVariant$() {
    return this.activeProductVariant$;
  }


  getTesting$() {
    return this.testing$;
  }

}
