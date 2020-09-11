import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsLibraryComponent } from './ingredients-library.component';

describe('IngredientsLibraryComponent', () => {
  let component: IngredientsLibraryComponent;
  let fixture: ComponentFixture<IngredientsLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientsLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
