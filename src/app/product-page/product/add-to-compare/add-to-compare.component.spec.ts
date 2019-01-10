import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCompareComponent } from './add-to-compare.component';

describe('AddToCompareComponent', () => {
  let component: AddToCompareComponent;
  let fixture: ComponentFixture<AddToCompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToCompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
