import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { AddReviewComponent } from './add-review.component';
import { ProductsService } from '../../../../core/services/products.service';
import { Store } from '@ngrx/store';
import { MockStore } from '../../../../testing/mock-store';

describe('AddReviewComponent', () => {
  let component: AddReviewComponent;
  let fixture: ComponentFixture<AddReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReviewComponent ],
      imports: [
        ReactiveFormsModule,
      ],
      providers: [
        ProductsService,
        { provide: Store, useClass: MockStore }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
