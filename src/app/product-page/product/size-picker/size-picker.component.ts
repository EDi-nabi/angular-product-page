import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { Product } from 'src/app/models/product.model';
import * as fromProductList from '../../../store/product-list.reducers';
import * as ProductListActions from '../../../store/product-list.actions';
import * as fromApp from '../../../store/app.reducers';

@Component({
  selector: 'app-size-picker',
  templateUrl: './size-picker.component.html',
  styleUrls: ['./size-picker.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SizePickerComponent implements OnInit {

  productListState: Observable<fromProductList.State>;
  product: Product | false = false;
  variant = 0;
  sizes: String[];
  selectedSize: string;

  constructor(
    private store: Store<fromApp.AppState>,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.productListState = this.store.select('products');
    this.productListState.subscribe({
      next: (productListState: fromProductList.State) => {
        this.product = productListState.activeProduct.product;
        this.variant = productListState.activeProduct.variant;
        if (this.product) {
          // get distinct sizes from variants array
          this.sizes = this.product.variants.map(variant => variant.size).filter((value, index, self) => self.indexOf(value) === index);
          this.selectedSize = this.product.variants[this.variant].size;
        }
        this.changeDetector.detectChanges();
      }
    });

  }

  onSizeChange(size: string) {
    this.store.dispatch(new ProductListActions.PickSize(size));
    this.selectedSize = size;
  }

}
