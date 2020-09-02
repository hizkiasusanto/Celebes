import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridTileContentComponent } from './grid-tile-content.component';

describe('GridTileComponent', () => {
  let component: GridTileContentComponent;
  let fixture: ComponentFixture<GridTileContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridTileContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridTileContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
