import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesByItemComponent } from './expenses-by-item.component';

describe('ExpensesByItemComponent', () => {
  let component: ExpensesByItemComponent;
  let fixture: ComponentFixture<ExpensesByItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpensesByItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesByItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
