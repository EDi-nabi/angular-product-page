import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ProductsService } from '../../../services/products.service';


@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddReviewComponent implements OnInit {

  reviewForm: FormGroup;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.reviewForm = new FormGroup({
      name: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    const review = this.reviewForm.value;
    this.productsService.dispatchAddReview(review);
    this.reviewForm.reset();
  }
}
