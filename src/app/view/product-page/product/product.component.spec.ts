import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductComponent } from './product.component';
import { ProductsService } from '../../../core/services/products.service';
import { CarouselComponent } from './carousel/carousel.component';
import { DetailsComponent } from './details/details.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { SizePickerComponent } from './size-picker/size-picker.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { AddToFavoriteComponent } from './add-to-favorite/add-to-favorite.component';
import { AddToCompareComponent } from './add-to-compare/add-to-compare.component';
import { AddReviewComponent } from './add-review/add-review.component';

import { Store } from '@ngrx/store';
import { MockStore } from '../../../testing/mock-store';
import { MockProductsService } from '../../../testing/mock-products-service';


describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
      ],
      declarations: [
        ProductComponent,
        CarouselComponent,
        ColorPickerComponent,
        SizePickerComponent,
        AddToCartComponent,
        AddToFavoriteComponent,
        AddToCompareComponent,
        DetailsComponent,
        ReviewsComponent,
        AddReviewComponent,
      ],
      providers: [
        { provide: ProductsService, useClass: MockProductsService },
        { provide: Store, useClass: MockStore }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
