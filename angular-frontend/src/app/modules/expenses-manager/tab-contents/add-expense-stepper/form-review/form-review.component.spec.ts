import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReviewComponent } from './form-review.component';

describe('FormReviewComponent', () => {
  let component: FormReviewComponent;
  let fixture: ComponentFixture<FormReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
