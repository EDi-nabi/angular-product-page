import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromApp from '../store/app.reducers';
import * as fromStore from '../store';
import * as CompareActions from '../store/compare.actions';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CompareService {

  public compare$: Observable<Product[]>;

  constructor(private store: Store<fromApp.AppState>) { }

  // get from state
  getCompare$() {
    return this.compare$ ? this.compare$ : this.compare$ = this.store.select(fromStore.getCompare);
  }

  // dispatch actions
  dispatchAddToCompare(product: Product) {
    this.store.dispatch(new CompareActions.AddToCompare(product));
  }

  dispatchRemoveFromCompare(id: number) {
    this.store.dispatch(new CompareActions.RemoveFromCompare(id));
  }

}
