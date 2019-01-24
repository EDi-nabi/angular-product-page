import { BehaviorSubject, Observable } from 'rxjs';
import { MockData } from './mock-data';
import { Product } from '../core/models/product.model';
import { ActiveProduct } from '../core/interfaces/active-product.interface';

export class MockProductsService {
  private mockData = new MockData();

  getProducts$(): Observable<Product[]> {
    const state: BehaviorSubject<Product[]> = new BehaviorSubject(this.mockData.getProducts());
    return state.asObservable();
  }

  getActiveProduct$(): Observable<ActiveProduct> {
    const state: BehaviorSubject<ActiveProduct> = new BehaviorSubject(this.mockData.getActiveProduct());
    return state.asObservable();
  }

  getActiveProductItem$(): Observable<Product> {
    const state: BehaviorSubject<Product> = new BehaviorSubject(this.mockData.getActiveProductItem());
    return state.asObservable();
  }

  getActiveProductVariant$(): Observable<number> {
    const state: BehaviorSubject<number> = new BehaviorSubject(this.mockData.getActiveProductVariant());
    return state.asObservable();
  }

}
