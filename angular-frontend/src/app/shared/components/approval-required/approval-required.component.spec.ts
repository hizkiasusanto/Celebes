import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalRequiredComponent } from './approval-required.component';

describe('ApprovalRequiredComponent', () => {
  let component: ApprovalRequiredComponent;
  let fixture: ComponentFixture<ApprovalRequiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalRequiredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalRequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
