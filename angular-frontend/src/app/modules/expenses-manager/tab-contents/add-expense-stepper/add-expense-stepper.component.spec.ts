import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpenseStepperComponent } from './add-expense-stepper.component';

describe('AddExpenseStepperComponent', () => {
  let component: AddExpenseStepperComponent;
  let fixture: ComponentFixture<AddExpenseStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExpenseStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExpenseStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
