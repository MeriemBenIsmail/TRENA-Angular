import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsTerrainsComponent } from './steps-terrains.component';

describe('StepsTerrainsComponent', () => {
  let component: StepsTerrainsComponent;
  let fixture: ComponentFixture<StepsTerrainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepsTerrainsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepsTerrainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
