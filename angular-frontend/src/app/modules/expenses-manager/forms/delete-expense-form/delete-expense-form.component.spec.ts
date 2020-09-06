import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteExpenseFormComponent } from './delete-expense-form.component';

describe('DeleteExpenseFormComponent', () => {
  let component: DeleteExpenseFormComponent;
  let fixture: ComponentFixture<DeleteExpenseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteExpenseFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteExpenseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
