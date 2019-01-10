import { Action } from '@ngrx/store';
import { Product } from '../models/product.model';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export class AddToCart implements Action {
  readonly type = ADD_TO_CART;
  constructor(public payload: Product) { }
}

export class RemoveFromCart implements Action {
  readonly type = REMOVE_FROM_CART;
  constructor(public payload: number) { }
}

export type CartActions = AddToCart | RemoveFromCart;
