import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { Product } from 'src/app/models/product.model';
import * as fromProductList from '../../../store/product-list.reducers';
import * as fromApp from '../../../store/app.reducers';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  productListState: Observable<fromProductList.State>;
  product: Product | false = false;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
    this.store.select('products').pipe(take(1)).subscribe(
      (productListState: fromProductList.State) => {
        this.product = productListState.activeProduct.product;
      }
    );
  }

}
