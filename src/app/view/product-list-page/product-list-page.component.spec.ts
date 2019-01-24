import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductListPageComponent } from './product-list-page.component';
import { ProductsService } from '../../core/services/products.service';
// import { MockProductsService } from '../../testing/mock-products-service';

import { BehaviorSubject, Observable } from 'rxjs';
import { MockData } from '../../testing/mock-data';
import { Product } from '../../core/models/product.model';

export class MockProductsService {
  private mockData = new MockData();

  getProducts$(): Observable<Product[]> {
    const state: BehaviorSubject<Product[]> = new BehaviorSubject(this.mockData.getProducts());
    return state.asObservable();
  }
}


describe('ProductListPageComponent', () => {
  let component: ProductListPageComponent;
  let fixture: ComponentFixture<ProductListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListPageComponent ],
      imports: [RouterTestingModule ],
      providers: [
        { provide: ProductsService, useClass: MockProductsService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
