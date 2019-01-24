import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsComponent } from './reviews.component';
import { ProductsService } from '../../../../core/services/products.service';
// import { MockProductsService } from '../../../../testing/mock-products-service';

import { BehaviorSubject, Observable } from 'rxjs';
import { MockData } from '../../../../testing/mock-data';
import { Product } from '../../../../core/models/product.model';

export class MockProductsService {
  private mockData = new MockData();

  getActiveProductItem$(): Observable<Product> {
    const state: BehaviorSubject<Product> = new BehaviorSubject(this.mockData.getActiveProductItem());
    return state.asObservable();
  }

}

describe('ReviewsComponent', () => {
  let component: ReviewsComponent;
  let fixture: ComponentFixture<ReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewsComponent ],
      providers: [
        { provide: ProductsService, useClass: MockProductsService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
