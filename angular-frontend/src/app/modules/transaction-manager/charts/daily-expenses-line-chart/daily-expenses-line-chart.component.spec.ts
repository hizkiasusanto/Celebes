import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyExpensesLineChartComponent } from './daily-expenses-line-chart.component';

describe('DailyExpensesLineChartComponent', () => {
  let component: DailyExpensesLineChartComponent;
  let fixture: ComponentFixture<DailyExpensesLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyExpensesLineChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyExpensesLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
