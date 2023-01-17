import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrainHeroComponent } from './terrain-hero.component';

describe('TerrainHeroComponent', () => {
  let component: TerrainHeroComponent;
  let fixture: ComponentFixture<TerrainHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerrainHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerrainHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
