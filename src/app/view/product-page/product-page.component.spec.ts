import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductPageComponent } from './product-page.component';
import { ProductComponent } from './product/product.component';
import { CarouselComponent } from './product/carousel/carousel.component';
import { DetailsComponent } from './product/details/details.component';
import { ReviewsComponent } from './product/reviews/reviews.component';
import { ColorPickerComponent } from './product/color-picker/color-picker.component';
import { SizePickerComponent } from './product/size-picker/size-picker.component';
import { AddToCartComponent } from './product/add-to-cart/add-to-cart.component';
import { AddToFavoriteComponent } from './product/add-to-favorite/add-to-favorite.component';
import { AddToCompareComponent } from './product/add-to-compare/add-to-compare.component';
import { OtherProductsComponent } from './other-products/other-products.component';
import { SimilarProductsComponent } from './similar-products/similar-products.component';
import { AddReviewComponent } from './product/add-review/add-review.component';
import { ProductsService } from '../../core/services/products.service';

import { Store } from '@ngrx/store';
import { MockStore } from '../../testing/mock-store';
import { MockProductsService } from '../../testing/mock-products-service';

describe('ProductPageComponent', () => {
  let component: ProductPageComponent;
  let fixture: ComponentFixture<ProductPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductPageComponent,
        ProductComponent,
        CarouselComponent,
        DetailsComponent,
        ReviewsComponent,
        ColorPickerComponent,
        SizePickerComponent,
        AddToCartComponent,
        AddToFavoriteComponent,
        AddToCompareComponent,
        OtherProductsComponent,
        SimilarProductsComponent,
        AddReviewComponent,
      ],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      providers: [
        { provide: ProductsService, useClass: MockProductsService },
        { provide: Store, useClass: MockStore }
      ]
    });
    // .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
