import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfEmployeesComponent } from './list-of-employees.component';

describe('EmployeesComponent', () => {
  let component: ListOfEmployeesComponent;
  let fixture: ComponentFixture<ListOfEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
