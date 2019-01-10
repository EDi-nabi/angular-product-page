import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

import { CartService } from '../../../../core/services/cart.service';
import { ProductsService } from '../../../../core/services/products.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  public product$;
  public cart$;

  constructor(private productsService: ProductsService, private cartService: CartService) { }

  ngOnInit() {
    this.product$ = this.productsService.getActiveProduct$();
    this.cart$ = this.cartService.getCart$();
  }

  onAddToCart() {
    this.product$.pipe(take(1)).subscribe(product => this.cartService.dispatchAddToCart(product));
  }

  onRemoveFromCart(id: number) {
    this.cartService.dispatchRemoveFromCart(id);
  }
}
