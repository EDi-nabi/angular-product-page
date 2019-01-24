import { TestBed } from '@angular/core/testing';

import { FavoriteService } from './favorite.service';
import { Store } from '@ngrx/store';
import { MockStore } from '../../testing/mock-store';

describe('FavoriteService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: Store, useClass: MockStore }
    ]
  }));

  it('should be created', () => {
    const service: FavoriteService = TestBed.get(FavoriteService);
    expect(service).toBeTruthy();
  });
});
