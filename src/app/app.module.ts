import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductComponent } from './product-page/product/product.component';
import { CarouselComponent } from './product-page/product/carousel/carousel.component';
import { DetailsComponent } from './product-page/product/details/details.component';
import { ReviewsComponent } from './product-page/product/reviews/reviews.component';
import { ColorPickerComponent } from './product-page/product/color-picker/color-picker.component';
import { SizePickerComponent } from './product-page/product/size-picker/size-picker.component';
import { AddToCartComponent } from './product-page/product/add-to-cart/add-to-cart.component';
import { AddToFavoriteComponent } from './product-page/product/add-to-favorite/add-to-favorite.component';
import { AddToCompareComponent } from './product-page/product/add-to-compare/add-to-compare.component';
import { OtherProductsComponent } from './product-page/other-products/other-products.component';
import { SimilarProductsComponent } from './product-page/similar-products/similar-products.component';
import { AddReviewComponent } from './product-page/product/add-review/add-review.component';
import { ProductListPageComponent } from './product-list-page/product-list-page.component';

import { reducers } from './store/app.reducers';

@NgModule({
  declarations: [
    AppComponent,
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
    ProductListPageComponent,
  ],
  imports: [
    StoreModule.forRoot(reducers),
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
