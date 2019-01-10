import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ProductsService } from '../../../core/services/products.service';

@Component({
  selector: 'app-similar-products',
  templateUrl: './similar-products.component.html',
  styleUrls: ['./similar-products.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimilarProductsComponent implements OnInit {

  public products$;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.products$ = this.productsService.getProducts$();
  }

}
