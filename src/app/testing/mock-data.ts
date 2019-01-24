export class MockData {
  private cart = [];
  private compare = [];
  private favorite = [];
  private review = { name: 'Bob', content: 'Lorem ipsum' };
  private reviews = [this.review];
  private variant1 = { color: 'blue', size: 'S', code: 'SBLUE', image: 'https://image.jpg' };
  private variant2 = { color: 'orange', size: 'M', code: 'MORANGE', image: 'https://image.jpg' };
  private variant3 = { color: 'purple', size: 'L', code: 'LPURPLE', image: 'https://image.jpg' };
  private variants = [this.variant1, this.variant2, this.variant3];
  private product1 = { id: 1, name: 'Product 1', description: 'Lorem ipsum', price: 10.0, variants: this.variants, reviews: this.reviews };
  private product2 = { id: 2, name: 'Product 2', description: 'Lorem ipsum', price: 10.0, variants: this.variants, reviews: this.reviews };
  private products = [this.product1, this.product2];
  private activeProduct = { product: this.product1, variant: 0 };
  private productList = { activeProduct: this.activeProduct, products: this.products };
  private store = { cart: this.cart, compare: this.compare, favorite: this.favorite, productlist: this.productList };

  getStore() { return this.store; }
  getCart() { return this.cart; }
  getCompare() { return this.compare; }
  getFavorite() { return this.favorite; }
  getProductList() { return this.productList; }
  getProducts() { return this.products; }
  getActiveProduct() { return this.activeProduct; }
  getActiveProductItem() { return this.product1; }
  getActiveProductVariant() { return 0; }
}
