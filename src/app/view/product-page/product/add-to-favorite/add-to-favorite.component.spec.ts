import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToFavoriteComponent } from './add-to-favorite.component';
import { ProductsService } from '../../../../core/services/products.service';
import { Store } from '@ngrx/store';
import { MockStore } from '../../../../testing/mock-store';

describe('AddToFavoriteComponent', () => {
  let component: AddToFavoriteComponent;
  let fixture: ComponentFixture<AddToFavoriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToFavoriteComponent ],
      providers: [
        ProductsService,
        { provide: Store, useClass: MockStore }
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
