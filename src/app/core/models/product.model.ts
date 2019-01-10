import { ProductVariant } from '../interfaces/product-variant.interface';
import { Review } from '../interfaces/review.interface';

export class Product {
  public id: number;
  public name: string;
  public description: string;
  public price: number;
  public variants: ProductVariant[];
  public reviews: Review[];

  constructor(id: number, name: string, desc: string, price: number, variants: ProductVariant[], reviews: Review[] = []) {
    this.id = id;
    this.name = name;
    this.description = desc;
    this.price = price;
    this.variants = variants;
    this.reviews = reviews;
  }
}
