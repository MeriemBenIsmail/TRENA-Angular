import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrainCardComponent } from './terrain-card.component';

describe('TerrainCardComponent', () => {
  let component: TerrainCardComponent;
  let fixture: ComponentFixture<TerrainCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerrainCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerrainCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
