import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../../../core/services/products.service';

@Component({
  selector: 'app-size-picker',
  templateUrl: './size-picker.component.html',
  styleUrls: ['./size-picker.component.css'],
})
export class SizePickerComponent implements OnInit {
  public activeProduct$;
  public sizes: String[];
  public selectedSize: string;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.activeProduct$ = this.productsService.getActiveProduct$();
    this.getSizes();
  }

  getSizes() {
    this.activeProduct$.subscribe({
      next: activeProduct => {
        const product = activeProduct.product;
        const variant = activeProduct.variant;
        // get distinct sizes from variants array
        this.sizes = product.variants
          .map(item => item.size)
          .filter((value, index, self) => self.indexOf(value) === index);
        this.selectedSize = product.variants[variant].size;
      }
    });
  }

  onSizeChange(size: string) {
    this.productsService.dispatchPickSize(size);
    this.selectedSize = size;
  }
}
