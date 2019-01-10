import { Product } from '../models/product.model';
import * as CartActions from './cart.actions';
import * as fromApp from './app.reducers';

export interface State {
  cart: Product[];
}

const initialState: State = {
  cart: []
};

export function CartReducer(state = initialState, action: CartActions.CartActions) {
  switch (action.type) {
    case CartActions.ADD_TO_CART:
      const cart1 = [...state.cart];
      if (!cart1.find(product => product.id === action.payload.id)) {
        cart1.push(action.payload);
        return { ...state, cart: cart1 };
      }
      return state;

    case CartActions.REMOVE_FROM_CART:
      const cart2 = [...state.cart];
      let index = -1;
      index = cart2.findIndex(product => product.id === action.payload);
      if (index > -1) {
        cart2.splice(index, 1);
        return {
          ...state,
          cart: cart2
        };
      }
      return state;

    default:
      return state;
  }
}
