import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { Product } from 'src/app/models/product.model';
import * as fromCart from '../../../store/cart.reducers';
import * as CartActions from '../../../store/cart.actions';
import * as fromApp from '../../../store/app.reducers';
import * as fromProductList from '../../../store/product-list.reducers';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  product: Product | false = false;
  cartState: Observable<fromCart.State>;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
    this.store.select('products').pipe(take(1)).subscribe(
      (productListState: fromProductList.State) => {
        this.product = productListState.activeProduct.product;
      }
    );
    this.cartState = this.store.select('cart');
  }

  onAddToCart() {
    this.store.select('products').pipe(take(1)).subscribe(
      (productListState: fromProductList.State) => {
        if (productListState.activeProduct.product) {
          this.store.dispatch(new CartActions.AddToCart(productListState.activeProduct.product));
        }
      }
    );
  }

  onRemoveFromCart(id: number) {
    this.store.dispatch(new CartActions.RemoveFromCart(id));
  }
}
