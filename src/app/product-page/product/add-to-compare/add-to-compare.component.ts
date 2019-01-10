import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { Product } from 'src/app/models/product.model';
import * as fromCompare from '../../../store/compare.reducers';
import * as CompareActions from '../../../store/compare.actions';
import * as fromApp from '../../../store/app.reducers';
import * as fromProductList from '../../../store/product-list.reducers';

@Component({
  selector: 'app-add-to-compare',
  templateUrl: './add-to-compare.component.html',
  styleUrls: ['./add-to-compare.component.css']
})
export class AddToCompareComponent implements OnInit {

  product: Product | false = false;
  compareState: Observable<fromCompare.State>;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
    this.store.select('products').pipe(take(1)).subscribe(
      (productListState: fromProductList.State) => {
        this.product = productListState.activeProduct.product;
      }
    );
    this.compareState = this.store.select('compare');
  }

  onAddToCompare() {
    this.store.select('products').pipe(take(1)).subscribe(
      (productListState: fromProductList.State) => {
        if (productListState.activeProduct.product) {
          this.store.dispatch(new CompareActions.AddToCompare(productListState.activeProduct.product));
        }
      }
    );
  }

  onRemoveFromCompare(id: number) {
    this.store.dispatch(new CompareActions.RemoveFromCompare(id));
  }

}
