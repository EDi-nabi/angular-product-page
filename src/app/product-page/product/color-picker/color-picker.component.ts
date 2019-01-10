import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { Product } from 'src/app/models/product.model';
import * as fromProductList from '../../../store/product-list.reducers';
import * as ProductListActions from '../../../store/product-list.actions';
import * as fromApp from '../../../store/app.reducers';


@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorPickerComponent implements OnInit {

  productListState: Observable<fromProductList.State>;
  product: Product | false = false;
  variant = 0;
  colors: String[];
  selectedColor: string;

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
          // get distinct colors from variants array
          this.colors = this.product.variants.map(variant => variant.color).filter((value, index, self) => self.indexOf(value) === index);
          this.selectedColor = this.product.variants[this.variant].color;
        }
        this.changeDetector.detectChanges();
      }
    });
  }

  onColorChange(color: string) {
    this.store.dispatch(new ProductListActions.PickColor(color));
    this.selectedColor = color;
  }

}
