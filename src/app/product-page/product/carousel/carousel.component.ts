import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ProductsService } from '../../../services/products.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent implements OnInit {

  public product$;
  public variant$;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.product$ = this.productsService.getActiveProduct$();
    this.variant$ = this.productsService.getActiveProductVariant$();
  }

}
