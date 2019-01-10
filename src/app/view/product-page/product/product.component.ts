import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ProductsService } from '../../../core/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {

  public product$;
  public variant$;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.product$ = this.productsService.getActiveProduct$();
    this.variant$ = this.productsService.getActiveProductVariant$();
  }

}
