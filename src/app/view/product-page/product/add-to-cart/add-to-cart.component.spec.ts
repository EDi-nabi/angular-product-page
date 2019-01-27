import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCartComponent } from './add-to-cart.component';
import { ProductsService } from '../../../../core/services/products.service';
import { MockProductsService } from '../../../../testing/mock-products-service';
import { CartService } from '../../../../core/services/cart.service';
import { MockCartService } from '../../../../testing/mock-cart-service';


describe('AddToCartComponent', () => {
  let component: AddToCartComponent;
  let fixture: ComponentFixture<AddToCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToCartComponent ],
      providers: [
        ProductsService,
        { provide: ProductsService, useClass: MockProductsService },
        { provide: CartService, useClass: MockCartService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('onAddToCart should call dispatchAddToCart', () => {
    const cartService = fixture.debugElement.injector.get(CartService);
    const spyDispatchAddToCart = spyOn(cartService, 'dispatchAddToCart').and.callThrough();
    component.onAddToCart();
    expect(spyDispatchAddToCart).toHaveBeenCalledTimes(1);
  });

  it('onRemoveFromCart should call dispatchRemoveFromCart', () => {
    const cartService = fixture.debugElement.injector.get(CartService);
    const spyDispatchRemoveFromCart = spyOn(cartService, 'dispatchRemoveFromCart').and.callThrough();
    component.onRemoveFromCart(0);
    expect(spyDispatchRemoveFromCart).toHaveBeenCalledTimes(1);
    expect(spyDispatchRemoveFromCart).toHaveBeenCalledWith(0);
  });

});
