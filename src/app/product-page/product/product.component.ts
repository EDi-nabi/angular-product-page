import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {

  public product$;
  public variant$;

  public products$;
  public testing$;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.product$ = this.productsService.getActiveProduct$();
    this.variant$ = this.productsService.getActiveProductVariant$();

    this.products$ = this.productsService.getProducts$();
    this.testing$ = this.productsService.getTesting$();

    this.product$.subscribe({
      next: (x) => console.log('product: ', x)
    });

    this.testing$.subscribe({
      next: (x) => console.log('testing: ', x)
    });

    this.products$.subscribe({
      next: (x) => console.log('products: ', x)
    });

    // this.variant$.subscribe({
    //   next: (x) => console.log(x)
    // });

    // console.log('product$:', this.product$);
    // this.product$.subscribe(
    //   {
    //     next: (product) => {
    //       console.log('product:', product);
    //     }
    //   }
    // );
  }

}
