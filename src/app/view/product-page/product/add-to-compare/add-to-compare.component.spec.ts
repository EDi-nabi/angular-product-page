import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCompareComponent } from './add-to-compare.component';
import { ProductsService } from '../../../../core/services/products.service';
import { MockProductsService } from '../../../../testing/mock-products-service';
import { CompareService } from '../../../../core/services/compare.service';
import { MockCompareService } from '../../../../testing/mock-compare-service';

describe('AddToCompareComponent', () => {
  let component: AddToCompareComponent;
  let fixture: ComponentFixture<AddToCompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToCompareComponent ],
      providers: [
        { provide: ProductsService, useClass: MockProductsService },
        { provide: CompareService, useClass: MockCompareService }
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('onAddToCompare should call dispatchAddToCompare', () => {
    const compareService = fixture.debugElement.injector.get(CompareService);
    const spyDispatchAddToCompare = spyOn(compareService, 'dispatchAddToCompare').and.callThrough();
    component.onAddToCompare();
    expect(spyDispatchAddToCompare).toHaveBeenCalledTimes(1);
  });

  it('onRemoveFromCompare should call dispatchRemoveFromCompare', () => {
    const compareService = fixture.debugElement.injector.get(CompareService);
    const spyDispatchRemoveFromCompare = spyOn(compareService, 'dispatchRemoveFromCompare').and.callThrough();
    component.onRemoveFromCompare(0);
    expect(spyDispatchRemoveFromCompare).toHaveBeenCalledTimes(1);
    expect(spyDispatchRemoveFromCompare).toHaveBeenCalledWith(0);
  });

});
