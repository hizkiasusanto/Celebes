import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExpenseFormComponent } from './edit-expense-form.component';

describe('EditExpenseFormComponent', () => {
  let component: EditExpenseFormComponent;
  let fixture: ComponentFixture<EditExpenseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditExpenseFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditExpenseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
