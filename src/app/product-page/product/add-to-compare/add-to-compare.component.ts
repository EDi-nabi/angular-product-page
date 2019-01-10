import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

import { CompareService } from '../../../services/compare.service';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-add-to-compare',
  templateUrl: './add-to-compare.component.html',
  styleUrls: ['./add-to-compare.component.css']
})
export class AddToCompareComponent implements OnInit {

  public product$;
  public compare$;

  constructor(private productsService: ProductsService, private compareService: CompareService) { }

  ngOnInit() {
    this.product$ = this.productsService.getActiveProduct$();
    this.compare$ = this.compareService.getCompare$();
  }

  onAddToCompare() {
    this.product$.pipe(take(1)).subscribe(product => this.compareService.dispatchAddToCompare(product));
  }

  onRemoveFromCompare(id: number) {
    this.compareService.dispatchRemoveFromCompare(id);
  }
}
