import { Action } from '@ngrx/store';
import { Product } from '../models/product.model';

export const ADD_TO_CART = '[Cart] Add to cart';
export const REMOVE_FROM_CART = '[Cart] Remove from cart';

export class AddToCart implements Action {
  readonly type: typeof ADD_TO_CART = ADD_TO_CART;
  constructor(public payload: Product) { }
}

export class RemoveFromCart implements Action {
  readonly type: typeof REMOVE_FROM_CART = REMOVE_FROM_CART;
  constructor(public payload: number) { }
}

export type CartActions = AddToCart | RemoveFromCart;
