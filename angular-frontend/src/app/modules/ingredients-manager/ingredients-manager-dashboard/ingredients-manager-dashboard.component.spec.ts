import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsManagerDashboardComponent } from './ingredients-manager-dashboard.component';

describe('IngredientsManagerDashboardComponent', () => {
  let component: IngredientsManagerDashboardComponent;
  let fixture: ComponentFixture<IngredientsManagerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientsManagerDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsManagerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
