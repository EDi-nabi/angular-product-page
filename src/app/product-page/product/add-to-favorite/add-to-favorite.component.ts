import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { Product } from 'src/app/models/product.model';
import * as fromFavorite from '../../../store/favorite.reducers';
import * as FavoriteActions from '../../../store/favorite.actions';
import * as fromApp from '../../../store/app.reducers';
import * as fromProductList from '../../../store/product-list.reducers';

@Component({
  selector: 'app-add-to-favorite',
  templateUrl: './add-to-favorite.component.html',
  styleUrls: ['./add-to-favorite.component.css']
})
export class AddToFavoriteComponent implements OnInit {

  product: Product | false = false;
  favoriteState: Observable<fromFavorite.State>;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
    this.store.select('products').pipe(take(1)).subscribe(
      (productListState: fromProductList.State) => {
        this.product = productListState.activeProduct.product;
      }
    );
    this.favoriteState = this.store.select('favorite');
  }

  onAddToFavorite() {
    this.store.select('products').pipe(take(1)).subscribe(
      (productListState: fromProductList.State) => {
        if (productListState.activeProduct.product) {
          this.store.dispatch(new FavoriteActions.AddToFavorite(productListState.activeProduct.product));
        }
      }
    );
  }

  onRemoveFromFavorite(id: number) {
    this.store.dispatch(new FavoriteActions.RemoveFromFavorite(id));
  }

}
