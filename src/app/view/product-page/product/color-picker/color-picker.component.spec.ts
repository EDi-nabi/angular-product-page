import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPickerComponent } from './color-picker.component';
import { ProductsService } from '../../../../core/services/products.service';

import { BehaviorSubject, Observable } from 'rxjs';
import { MockData } from '../../../../testing/mock-data';
import { Product } from '../../../../core/models/product.model';
import { ActiveProduct } from '../../../../core/interfaces/active-product.interface';

export class MockProductsService {
  private mockData = new MockData();

  getActiveProduct$(): Observable<ActiveProduct> {
    const state: BehaviorSubject<ActiveProduct> = new BehaviorSubject(this.mockData.getActiveProduct());
    return state.asObservable();
  }

}

describe('ColorPickerComponent', () => {
  let component: ColorPickerComponent;
  let fixture: ComponentFixture<ColorPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorPickerComponent ],
      providers: [
        { provide: ProductsService, useClass: MockProductsService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
