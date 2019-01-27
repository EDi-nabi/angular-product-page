import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { SizePickerComponent } from './size-picker.component';
import { ProductsService } from '../../../../core/services/products.service';
import { MockProductsService } from '../../../../testing/mock-products-service';

describe('SizePickerComponent', () => {
  let component: SizePickerComponent;
  let fixture: ComponentFixture<SizePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizePickerComponent ],
      providers: [
        { provide: ProductsService, useClass: MockProductsService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('getSizes should get distinct sizes', () => {
    expect(component.sizes).toEqual(['S', 'L']);
  });

  it('onSizeChange should set selectedSize', () => {
    const productsService = fixture.debugElement.injector.get(ProductsService);
    expect(component.selectedSize).toEqual('S');
    const spyDispatchPickSize = spyOn(productsService, 'dispatchPickSize').and.callThrough();
    component.onSizeChange('L');
    expect(component.selectedSize).toEqual('L', 'selectedSize should equal L');
    expect(spyDispatchPickSize).toHaveBeenCalledTimes(1);
    expect(spyDispatchPickSize).toHaveBeenCalledWith('L');
  });

});
