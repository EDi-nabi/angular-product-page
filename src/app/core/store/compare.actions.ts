import { Action } from '@ngrx/store';
import { Product } from '../models/product.model';

export const ADD_TO_COMPARE = '[Compare] Add to compare';
export const REMOVE_FROM_COMPARE = '[Compare] Remove from compare';

export class AddToCompare implements Action {
  readonly type = ADD_TO_COMPARE;
  constructor(public payload: Product) { }
}

export class RemoveFromCompare implements Action {
  readonly type = REMOVE_FROM_COMPARE;
  constructor(public payload: number) { }
}

export type CompareActions = AddToCompare | RemoveFromCompare;
