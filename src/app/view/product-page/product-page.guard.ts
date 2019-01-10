import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Params, ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { ProductsService } from '../../core/services/products.service';

@Injectable({
  providedIn: 'root'
})
export class ProductPageGuard implements CanActivate {

  constructor(private productsService: ProductsService, private route: ActivatedRoute) { }

  setViewProduct(id: number): Observable<any> {
    return this.route.params.pipe(tap((params: Params) => {
      this.productsService.dispatchViewProduct(+params['id']);
      console.log('Params z routera', params['id']);
    }));
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.productsService.dispatchViewProduct(+next.params.id);
    return true;
  }



}