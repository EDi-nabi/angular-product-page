import { TestBed } from '@angular/core/testing';

import { CompareService } from './compare.service';

import { Store } from '@ngrx/store';
import { MockStore } from '../../testing/mock-store';

describe('CompareService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: Store, useClass: MockStore }
    ]
  }));

  it('should be created', () => {
    const service: CompareService = TestBed.get(CompareService);
    expect(service).toBeTruthy();
  });
});
