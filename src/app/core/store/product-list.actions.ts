import { Action } from '@ngrx/store';
import { Review } from '../interfaces/review.interface';

export const VIEW_PRODUCT = 'VIEW_PRODUCT';
export const VIEW_PRODUCT_VARIANT = 'VIEW_PRODUCT_VARIANT';
export const PICK_COLOR = 'PICK_COLOR';
export const PICK_SIZE = 'PICK_SIZE';
export const ADD_REVIEW = 'ADD_REVIEW';


export class ViewProduct implements Action {
  readonly type = VIEW_PRODUCT;
  constructor(public payload: number) { }
}

export class ViewProductVariant implements Action {
  readonly type = VIEW_PRODUCT_VARIANT;
  constructor(public payload: number) { }
}

export class PickColor implements Action {
  readonly type = PICK_COLOR;
  constructor(public payload: string) { }
}

export class PickSize implements Action {
  readonly type = PICK_SIZE;
  constructor(public payload: string) { }
}

export class AddReview implements Action {
  readonly type = ADD_REVIEW;
  constructor(public payload: Review) { }
}

export type ProductListActions = ViewProduct | ViewProductVariant | PickColor | PickSize | AddReview;
