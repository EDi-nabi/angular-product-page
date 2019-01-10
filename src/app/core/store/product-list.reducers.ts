import * as ProductListActions from './product-list.actions';
import { Product } from '../models/product.model';
import { ActiveProduct } from '../interfaces/active-product.interface';

export interface ProductList {
  products: Product[];
  activeProduct: ActiveProduct;
}
export interface State {
  productlist: ProductList;
}

// some dummy products
const initialState: State = {
  productlist: {
    activeProduct: {
    },
    products: [
      new Product(1, 'Product 1', 'P1 Lorem ipsum dolor sit amet.', 12.3,
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
      new Product(2, 'Product 2', 'P2 Lorem ipsum dolor sit amet.', 13.4,
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
      new Product(3, 'Product 3', 'P3 Lorem ipsum dolor sit amet.', 14.5,
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
      new Product(4, 'Product 4', 'P4 Lorem ipsum dolor sit amet.', 15.6,
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
      new Product(5, 'Product 5', 'P5 Lorem ipsum dolor sit amet.', 16.7,
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
  }
};

export function ProductListReducer(state = initialState, action: ProductListActions.ProductListActions) {
  switch (action.type) {

    case ProductListActions.VIEW_PRODUCT:
      const product1 = state.productlist.products.find(prod => prod.id === action.payload);
      return { productlist: { ...state.productlist, activeProduct: { ...state.productlist.activeProduct, product: product1, variant: 0 } } };

      case ProductListActions.VIEW_PRODUCT_VARIANT:
      // return { productList: { ...state.productlist, activeProduct: { ...state.productlist.activeProduct, variant: action.payload } } };
      return state;

      case ProductListActions.PICK_COLOR:
      const activeProduct1 = state.productlist.activeProduct.product;
      const activeVariant1 = state.productlist.activeProduct.variant;
      let activeSize = '';
      if (activeProduct1) {
        activeSize = activeProduct1.variants[activeVariant1].size;
        const newVariant1 = activeProduct1.variants.findIndex(variant => variant.size === activeSize && variant.color === action.payload);
        return { productlist: { ...state.productlist, activeProduct: { ...state.productlist.activeProduct, product: activeProduct1, variant: newVariant1 } } };
      }
      return state;

    case ProductListActions.PICK_SIZE:
      const activeProduct2 = state.productlist.activeProduct.product;
      const activeVariant2 = state.productlist.activeProduct.variant;
      let activeColor = '';
      if (activeProduct2) {
        activeColor = activeProduct2.variants[activeVariant2].color;
        const newVariant2 = activeProduct2.variants.findIndex(variant => variant.color === activeColor && variant.size === action.payload);
        return { productlist: { ...state.productlist, activeProduct: { ...state.productlist.activeProduct, product: activeProduct2, variant: newVariant2 } } };
      }
      return state;

    case ProductListActions.ADD_REVIEW:
      const activeProduct3 = state.productlist.activeProduct.product;
      if (activeProduct3) {
        const index = state.productlist.products.findIndex(prod => prod.id === activeProduct3.id);
        const product3 = state.productlist.products[index];
        product3.reviews.push(action.payload);
        const products3 = [...state.productlist.products];
        products3[index] = product3;
        return {
          productlist: {
            ...state.productlist, products: products3, activeProduct: {
              ...state.productlist.activeProduct, product: product3 } } };
      }
      return state;

    default:
      return state;
  }
}

export const getProductList = (state: State) => state.productlist;
export const getProducts = (state: State) => state.productlist.products;
export const getActiveProduct = (state: State) => state.productlist.activeProduct;
export const getActiveProductItem = (state: State) => state.productlist.activeProduct.product;
export const getActiveProductVariant = (state: State) => state.productlist.activeProduct.variant;
