import { Action } from '@ngrx/store';
import { Product } from '../models/product.model';

export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
export const REMOVE_FROM_FAVORITE = 'REMOVE_FROM_FAVORITE';

export class AddToFavorite implements Action {
  readonly type = ADD_TO_FAVORITE;
  constructor(public payload: Product) { }
}

export class RemoveFromFavorite implements Action {
  readonly type = REMOVE_FROM_FAVORITE;
  constructor(public payload: number) { }
}

export type FavoriteActions = AddToFavorite | RemoveFromFavorite;
