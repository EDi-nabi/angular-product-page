import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';

import * as fromCore from '../store/core.reducers';
import * as fromStore from '../store';
import * as CartActions from '../store/cart.actions';
import { Product } from '../models/product.model';
import { MockStore } from '../../testing/mock-store';




describe('CartService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [],
    declarations: [],
    providers: [
      { provide: Store, useClass: MockStore }
    ]
  }));

  it('should be created', () => {
    const service: CartService = TestBed.get(CartService);
    expect(service).toBeTruthy();
  });
});
