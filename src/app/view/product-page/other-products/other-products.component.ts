import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ProductsService } from '../../../core/services/products.service';

@Component({
  selector: 'app-other-products',
  templateUrl: './other-products.component.html',
  styleUrls: ['./other-products.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OtherProductsComponent implements OnInit {

  public products$;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.products$ = this.productsService.getOtherProducts$();
  }

}
