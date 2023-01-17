import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrainsSliderComponent } from './terrains-slider.component';

describe('TerrainsSliderComponent', () => {
  let component: TerrainsSliderComponent;
  let fixture: ComponentFixture<TerrainsSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerrainsSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerrainsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
