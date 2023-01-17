import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTerrainComponent } from './admin-terrain.component';

describe('AdminTerrainComponent', () => {
  let component: AdminTerrainComponent;
  let fixture: ComponentFixture<AdminTerrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTerrainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTerrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
