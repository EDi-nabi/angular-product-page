import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-size-picker',
  templateUrl: './size-picker.component.html',
  styleUrls: ['./size-picker.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SizePickerComponent implements OnInit {

  public productList$;
  public sizes: String[];
  public selectedSize: string;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productList$ = this.productsService.getProductList$();
    this.getSizes();
  }

  getSizes() {
    this.productList$.subscribe({
      next: (productList) => {
        const product = productList.activeProduct.product;
        const variant = productList.activeProduct.variant;
        // get distinct sizes from variants array
        this.sizes = product.variants.map(item => item.size).filter((value, index, self) => self.indexOf(value) === index);
        this.selectedSize = product.variants[variant].size;
      }
    });
  }

  onSizeChange(size: string) {
    this.productsService.dispatchPickSize(size);
    this.selectedSize = size;
  }

}
