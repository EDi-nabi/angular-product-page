import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProductList from './product-list.reducers';


export const selectTestingState = createFeatureSelector<fromProductList.State>('testing');
export const getTesting = createSelector(selectTestingState, fromProductList.getTesting);

// selector functions for products
export const selectProductsState = createFeatureSelector<fromProductList.State>('products');
export const getProducts = createSelector(selectProductsState, fromProductList.getProducts);

// selector functions for activeProduct
export const selectActiveProductState = createFeatureSelector<fromProductList.State>('activeProduct');
export const getActiveProduct = createSelector(selectActiveProductState, fromProductList.getActiveProduct);
export const getActiveProductItem = createSelector(selectActiveProductState, fromProductList.getActiveProductItem);
export const getActiveProductVariant = createSelector(selectActiveProductState, fromProductList.getActiveProductVariant);

// router-store

// export interface RouterStateUrl {
//   url: string;
//   params: Params;
//   queryParams: Params;
// }

// @Injectable()
// export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
//   serialize(routerState: RouterStateSnapshot): RouterStateUrl {
//     let route = routerState.root;

//     while (route.firstChild) {
//       route = route.firstChild;
//     }

//     const {
//       url,
//       root: { queryParams }
//     } = routerState;
//     const { params } = route;

//     // Only return an object including the URL, params and query params
//     // instead of the entire snapshot
//     return { url, params, queryParams };
//   }
// }

import * as fromRouter from '@ngrx/router-store';

// let a = fromRouter.routerReducer
// fromRouter.routerReducer(selectProductsState, action);