import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ProductsService } from '../../../../core/services/products.service';


@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorPickerComponent implements OnInit {
  public activeProduct$;
  public colors: String[];
  public selectedColor: string;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.activeProduct$ = this.productsService.getActiveProduct$();
    this.getColors();
  }

  getColors() {
    this.activeProduct$.subscribe({
      next: activeProduct => {
        const product = activeProduct.product;
        const variant = activeProduct.variant;
        // get distinct colors from variants array
        this.colors = product.variants
          .map(item => item.color)
          .filter((value, index, self) => self.indexOf(value) === index);
        this.selectedColor = product.variants[variant].color;
      }
    });
  }

  onColorChange(color: string) {
    this.productsService.dispatchPickColor(color);
    this.selectedColor = color;
  }
}
