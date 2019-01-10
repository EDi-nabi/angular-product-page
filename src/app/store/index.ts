import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProductList from './product-list.reducers';
import * as fromCart from './cart.reducers';
import * as fromCompare from './compare.reducers';
import * as fromFavorite from './favorite.reducers';

// selector functions for productsList
export const selectProductsListState = createFeatureSelector<fromProductList.State>('productlist');
export const getProductList = createSelector(selectProductsListState, fromProductList.getProductList);
export const getProducts = createSelector(selectProductsListState, fromProductList.getProducts);
export const getActiveProduct = createSelector(selectProductsListState, fromProductList.getActiveProduct);
export const getActiveProductItem = createSelector(selectProductsListState, fromProductList.getActiveProductItem);
export const getActiveProductVariant = createSelector(selectProductsListState, fromProductList.getActiveProductVariant);

// selector functions for cart
export const selectCartState = createFeatureSelector<fromCart.State>('cart');
export const getCart = createSelector(selectCartState, fromCart.getCart);

// selector functions for compare
export const selectCompareState = createFeatureSelector<fromCompare.State>('compare');
export const getCompare = createSelector(selectCompareState, fromCompare.getCompare);

// selector functions for favorite
export const selectFavoriteState = createFeatureSelector<fromFavorite.State>('favorite');
export const getFavorite = createSelector(selectFavoriteState, fromFavorite.getFavorite);
