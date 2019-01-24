import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCompareComponent } from './add-to-compare.component';
import { ProductsService } from '../../../../core/services/products.service';
import { Store } from '@ngrx/store';
import { MockStore } from '../../../../testing/mock-store';

describe('AddToCompareComponent', () => {
  let component: AddToCompareComponent;
  let fixture: ComponentFixture<AddToCompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToCompareComponent ],
      providers: [
        ProductsService,
        { provide: Store, useClass: MockStore }
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
