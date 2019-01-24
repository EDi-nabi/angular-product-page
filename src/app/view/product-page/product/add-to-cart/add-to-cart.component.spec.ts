import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCartComponent } from './add-to-cart.component';
import { ProductsService } from '../../../../core/services/products.service';
import { Store } from '@ngrx/store';
import { MockStore } from '../../../../testing/mock-store';

describe('AddToCartComponent', () => {
  let component: AddToCartComponent;
  let fixture: ComponentFixture<AddToCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToCartComponent ],
      providers: [
        ProductsService,
        { provide: Store, useClass: MockStore }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
