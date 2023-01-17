import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTerrainsComponent } from './filter-terrains.component';

describe('FilterTerrainsComponent', () => {
  let component: FilterTerrainsComponent;
  let fixture: ComponentFixture<FilterTerrainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterTerrainsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterTerrainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
