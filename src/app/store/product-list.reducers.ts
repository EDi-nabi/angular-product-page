import * as ProductListActions from './product-list.actions';
import { Product } from '../models/product.model';
import { ActiveProduct } from '../interfaces/active-product.interface';

export interface State {
  products: Product[];
  activeProduct: ActiveProduct;
  testing: number;
}

// some dummy products
const initialState: State = {
  activeProduct: {
  },
  products: [
    new Product( 1, 'Product 1', 'P1 Lorem ipsum dolor sit amet.', 12.3,
      [
        { color: 'blue', size: 'XS', code: 'P1XSBLUE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/s/ws12-blue_main.jpg' },
        { color: 'orange', size: 'XS', code: 'P1XSORANGE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/s/ws12-orange_main.jpg' },
        { color: 'purple', size: 'XS', code: 'P1XSPURPLE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/s/ws12-purple_main.jpg' },
        { color: 'blue', size: 'S', code: 'P1SBLUE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/s/ws12-blue_main.jpg' },
        { color: 'orange', size: 'S', code: 'P1SORANGE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/s/ws12-orange_main.jpg' },
        { color: 'purple', size: 'S', code: 'P1SPURPLE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/s/ws12-purple_main.jpg' },
        { color: 'blue', size: 'M', code: 'P1MBLUE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/s/ws12-blue_main.jpg' },
        { color: 'orange', size: 'M', code: 'P1MORANGE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/s/ws12-orange_main.jpg' },
        { color: 'purple', size: 'M', code: 'P1MPURPLE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/s/ws12-purple_main.jpg' },
        { color: 'blue', size: 'L', code: 'P1LBLUE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/s/ws12-blue_main.jpg' },
        { color: 'orange', size: 'L', code: 'P1LORANGE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/s/ws12-orange_main.jpg' },
        { color: 'purple', size: 'L', code: 'P1LPURPLE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/s/ws12-purple_main.jpg' },
        { color: 'blue', size: 'XL', code: 'P1XLBLUE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/s/ws12-blue_main.jpg' },
        { color: 'orange', size: 'XL', code: 'P1XLORANGE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/s/ws12-orange_main.jpg' },
        { color: 'purple', size: 'XL', code: 'P1XLPURPLE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/s/ws12-purple_main.jpg' },
      ],
      [
        { name: 'Alfred', content: 'Lorem ipsum dolor sit amet...' }
      ]
    ),
    new Product( 2, 'Product 2', 'P2 Lorem ipsum dolor sit amet.', 13.4,
      [
        { color: 'green', size: 'XS', code: 'P2XSGREEN', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/h/wh09-green_main.jpg' },
        { color: 'purple', size: 'XS', code: 'P2XSPURPLE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/h/wh09-purple_main.jpg' },
        { color: 'red', size: 'XS', code: 'P2XSRED', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/h/wh09-red_main.jpg' },
        { color: 'green', size: 'XL', code: 'P2XLGREEN', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/h/wh09-green_main.jpg' },
        { color: 'purple', size: 'XL', code: 'P2XLPURPLE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/h/wh09-purple_main.jpg' },
        { color: 'red', size: 'XL', code: 'P2XLRED', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/h/wh09-red_main.jpg' },
      ],
      [
        { name: 'Romuald', content: 'Nie wszystko złoto, co się święci.' }
      ]
    ),
    new Product( 3, 'Product 3', 'P3 Lorem ipsum dolor sit amet.', 14.5,
      [
        { color: 'orange', size: 'XS', code: 'P3XSORANGE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/s/ws12-orange_main.jpg' },
        { color: 'blue', size: 'XS', code: 'P3XSBLUE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/s/ws12-blue_main.jpg' },
        { color: 'orange', size: 'S', code: 'P3SORANGE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/s/ws12-orange_main.jpg' },
        { color: 'blue', size: 'S', code: 'P3SBLUE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/s/ws12-blue_main.jpg' },
        { color: 'orange', size: 'M', code: 'P3MORANGE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/s/ws12-orange_main.jpg' },
        { color: 'blue', size: 'M', code: 'P3MBLUE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/s/ws12-blue_main.jpg' },
        { color: 'orange', size: 'L', code: 'P3LORANGE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/s/ws12-orange_main.jpg' },
        { color: 'blue', size: 'L', code: 'P3LBLUE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/s/ws12-blue_main.jpg' },
        { color: 'orange', size: 'XL', code: 'P3XLORANGE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/s/ws12-orange_main.jpg' },
        { color: 'blue', size: 'XL', code: 'P3XLBLUE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/s/ws12-blue_main.jpg' },
      ],
      [
        { name: 'AntekPL', content: 'Kupiłem takie Misiowi. Bardzo ładnie na nim leży.' }
      ]
    ),
    new Product( 4, 'Product 4', 'P4 Lorem ipsum dolor sit amet.', 15.6,
      [
        { color: 'black', size: 'XS', code: 'P5XSBLACK', image: 'https://demo.storefrontcloud.io/img/600/744/resize/m/h/mh03-black_main.jpg' },
        { color: 'blue', size: 'XS', code: 'P5XSBLUE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/m/h/mh03-blue_main.jpg' },
        { color: 'green', size: 'XS', code: 'P5XSGREEN', image: 'https://demo.storefrontcloud.io/img/600/744/resize/m/h/mh03-green_main.jpg' },
        { color: 'black', size: 'S', code: 'P5SBLACK', image: 'https://demo.storefrontcloud.io/img/600/744/resize/m/h/mh03-black_main.jpg' },
        { color: 'blue', size: 'S', code: 'P5SBLUE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/m/h/mh03-blue_main.jpg' },
        { color: 'green', size: 'S', code: 'P5SGREEN', image: 'https://demo.storefrontcloud.io/img/600/744/resize/m/h/mh03-green_main.jpg' },
        { color: 'black', size: 'M', code: 'P5MBLACK', image: 'https://demo.storefrontcloud.io/img/600/744/resize/m/h/mh03-black_main.jpg' },
        { color: 'blue', size: 'M', code: 'P5MBLUE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/m/h/mh03-blue_main.jpg' },
        { color: 'green', size: 'M', code: 'P5MGREEN', image: 'https://demo.storefrontcloud.io/img/600/744/resize/m/h/mh03-green_main.jpg' },
        { color: 'black', size: 'L', code: 'P5LBLACK', image: 'https://demo.storefrontcloud.io/img/600/744/resize/m/h/mh03-black_main.jpg' },
        { color: 'blue', size: 'L', code: 'P5LBLUE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/m/h/mh03-blue_main.jpg' },
        { color: 'green', size: 'L', code: 'P5LGREEN', image: 'https://demo.storefrontcloud.io/img/600/744/resize/m/h/mh03-green_main.jpg' },
        { color: 'black', size: 'XL', code: 'P5XLBLACK', image: 'https://demo.storefrontcloud.io/img/600/744/resize/m/h/mh03-black_main.jpg' },
        { color: 'blue', size: 'XL', code: 'P5XLBLUE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/m/h/mh03-blue_main.jpg' },
        { color: 'green', size: 'XL', code: 'P5XLGREEN', image: 'https://demo.storefrontcloud.io/img/600/744/resize/m/h/mh03-green_main.jpg' },
      ],
      [
        { name: 'Janusz', content: 'Pierwszy!!!1!1jeden!' }
      ]
    ),
    new Product( 5, 'Product 5', 'P5 Lorem ipsum dolor sit amet.', 16.7,
      [
        { color: 'purple', size: 'XS', code: 'P5XSPURPLE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/s/ws12-purple_main.jpg' },
        { color: 'blue', size: 'XS', code: 'P5XSBLUE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/s/ws12-blue_main.jpg' },
        { color: 'orange', size: 'XS', code: 'P5XSORANGE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/s/ws12-orange_main.jpg' },
        { color: 'purple', size: 'S', code: 'P5SPURPLE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/s/ws12-purple_main.jpg' },
        { color: 'blue', size: 'S', code: 'P5SBLUE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/s/ws12-blue_main.jpg' },
        { color: 'orange', size: 'S', code: 'P5SORANGE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/s/ws12-orange_main.jpg' },
        { color: 'purple', size: 'M', code: 'P5MPURPLE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/s/ws12-purple_main.jpg' },
        { color: 'blue', size: 'M', code: 'P5MBLUE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/s/ws12-blue_main.jpg' },
        { color: 'orange', size: 'M', code: 'P5MORANGE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/s/ws12-orange_main.jpg' },
        { color: 'purple', size: 'L', code: 'P5LPURPLE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/s/ws12-purple_main.jpg' },
        { color: 'blue', size: 'L', code: 'P5LBLUE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/s/ws12-blue_main.jpg' },
        { color: 'orange', size: 'L', code: 'P5LORANGE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/s/ws12-orange_main.jpg' },
        { color: 'purple', size: 'XL', code: 'P5XLPURPLE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/s/ws12-purple_main.jpg' },
        { color: 'blue', size: 'XL', code: 'P5XLBLUE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/s/ws12-blue_main.jpg' },
        { color: 'orange', size: 'XL', code: 'P5XLORANGE', image: 'https://demo.storefrontcloud.io/img/600/744/resize/w/s/ws12-orange_main.jpg' },
      ],
      [
        { name: 'Grażynka555', content: 'Ale kiecka!! Janiemoge!!! Krycha, ho no zobacz!!!!' }
      ]
    ),
  ]
  , testing: 13
};

export function ProductListReducer(state = initialState, action: ProductListActions.ProductListActions) {
  switch (action.type) {

    case ProductListActions.VIEW_PRODUCT:
      const product1 = state.products.find(prod => prod.id === action.payload);
      return { ...state, activeProduct: { product: product1, variant: 0 }};

    case ProductListActions.VIEW_PRODUCT_VARIANT:
      return { ...state, activeProduct: { ...state.activeProduct, variant: action.payload }};

    case ProductListActions.PICK_COLOR:
      const activeProduct1 = state.activeProduct.product;
      const activeVariant1 = state.activeProduct.variant;
      let activeSize = '';
      if (activeProduct1) {
        activeSize = activeProduct1.variants[activeVariant1].size;
        const newVariant = activeProduct1.variants.findIndex(variant => variant.size === activeSize && variant.color === action.payload);
        const newActiveProduct = { product: activeProduct1, variant: newVariant };
        return { ...state, activeProduct: newActiveProduct };
      }
      return state;

    case ProductListActions.PICK_SIZE:
      const activeProduct2 = state.activeProduct.product;
      const activeVariant2 = state.activeProduct.variant;
      let activeColor = '';
      if (activeProduct2) {
        activeColor = activeProduct2.variants[activeVariant2].color;
        const newVariant = activeProduct2.variants.findIndex(variant => variant.color === activeColor && variant.size === action.payload);
        const newActiveProduct = { product: activeProduct2, variant: newVariant };
        return { ...state, activeProduct: newActiveProduct };
      }
      return state;

    case ProductListActions.ADD_REVIEW:
      const activeProduct3 = state.activeProduct.product;
      if (activeProduct3) {
        const index = state.products.findIndex(prod => prod.id === activeProduct3.id);
        const product3 = state.products[index];
        product3.reviews.push(action.payload);
        const products3 = [...state.products];
        products3[index] = product3;
        return { ...state, products: products3, activeProduct: {...state.activeProduct, product: product3} };
      }
      return state;

    // case RouterActions.ROUTER_NAVIGATION:
    //   return state;

    default:
      return state;
  }
}
export const getTesting = (state: State) => { console.log('getTesting: ', state); return state.testing; };

export const getProducts = (state: State) => { console.log('getProducts: ', state); return state.products; };
export const getActiveProduct = (state: State) => { console.log('getActiveProduct: ', state); return state.activeProduct; };
export const getActiveProductItem = (state: State) => { console.log('getActiveProductItem: ', state); return state.activeProduct.product; };
export const getActiveProductVariant = (state: State) => { console.log('getActiveProductVariant: ', state); return state.activeProduct.variant; };
