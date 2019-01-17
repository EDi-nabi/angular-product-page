import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

import { FavoriteService } from '../../../../core/services/favorite.service';
import { ProductsService } from '../../../../core/services/products.service';

@Component({
  selector: 'app-add-to-favorite',
  templateUrl: './add-to-favorite.component.html',
  styleUrls: ['./add-to-favorite.component.css']
})
export class AddToFavoriteComponent implements OnInit {

  public product$;
  public favorite$;

  constructor(private productsService: ProductsService, private favoriteService: FavoriteService) { }

  ngOnInit() {
    this.product$ = this.productsService.getActiveProductItem$();
    this.favorite$ = this.favoriteService.getFavorite$();
  }

  onAddToFavorite() {
    this.product$.pipe(take(1)).subscribe(product => this.favoriteService.dispatchAddToFavorite(product));
  }

  onRemoveFromFavorite(id: number) {
    this.favoriteService.dispatchRemoveFromFavorite(id);
  }
}
