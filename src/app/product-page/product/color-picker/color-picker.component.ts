import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { ProductsService } from '../../../services/products.service';


@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorPickerComponent implements OnInit {

  public productList$;
  public colors: String[];
  public selectedColor: string;

  constructor(private productsService: ProductsService, private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.productList$ = this.productsService.getProductList$();
    this.getColors();
  }

  getColors() {
    this.productList$.subscribe({
      next: (productList) => {
        const product = productList.activeProduct.product;
        const variant = productList.activeProduct.variant;
        // get distinct colors from variants array
        this.colors = product.variants.map(item => item.color).filter((value, index, self) => self.indexOf(value) === index);
        this.selectedColor = product.variants[variant].color;
        this.changeDetector.detectChanges();
      }
    });
  }

  onColorChange(color: string) {
    this.productsService.dispatchPickColor(color);
    this.selectedColor = color;
  }

}
