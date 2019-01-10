import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
// import { take } from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';

// import { Product } from 'src/app/models/product.model';
import * as fromProductList from '../../store/product-list.reducers';
import * as ProductListActions from '../../store/product-list.actions';
import * as fromApp from '../../store/app.reducers';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productListState: Observable<fromProductList.State>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromApp.AppState>,
  ) { }

  ngOnInit() {
    this.productListState = this.store.select('products');
    this.route.params.subscribe(
      (params: Params) => {
        this.store.dispatch(new ProductListActions.ViewProduct(+params['id']));
      }
    );
  }

}
