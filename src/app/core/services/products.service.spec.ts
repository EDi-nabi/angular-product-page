import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';

import { Store } from '@ngrx/store';
import { MockStore } from '../../testing/mock-store';

describe('ProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: Store, useClass: MockStore }
    ]
  }));

  it('should be created', () => {
    const service: ProductsService = TestBed.get(ProductsService);
    expect(service).toBeTruthy();
  });
});
