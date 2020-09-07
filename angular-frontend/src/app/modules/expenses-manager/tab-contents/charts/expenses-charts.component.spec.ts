import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesChartsComponent } from './expenses-charts.component';

describe('ChartsComponent', () => {
  let component: ExpensesChartsComponent;
  let fixture: ComponentFixture<ExpensesChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpensesChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
