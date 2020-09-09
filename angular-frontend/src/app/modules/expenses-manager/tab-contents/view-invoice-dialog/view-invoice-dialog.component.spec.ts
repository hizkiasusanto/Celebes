import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInvoiceDialogComponent } from './view-invoice-dialog.component';

describe('ViewInvoiceDialogComponent', () => {
  let component: ViewInvoiceDialogComponent;
  let fixture: ComponentFixture<ViewInvoiceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewInvoiceDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInvoiceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
