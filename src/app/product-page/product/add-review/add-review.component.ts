import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as ProductListActions from '../../../store/product-list.actions';
// import * as fromProductList from '../../../store/product-list.reducers';
import * as fromApp from '../../../store/app.reducers';


@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  reviewForm: FormGroup;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

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
    this.store.dispatch(new ProductListActions.AddReview(review));
    console.log(review);
    this.reviewForm.reset();
  }
}
