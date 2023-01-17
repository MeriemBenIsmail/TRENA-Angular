import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTerrainComponent } from './single-terrain.component';

describe('SingleTerrainComponent', () => {
  let component: SingleTerrainComponent;
  let fixture: ComponentFixture<SingleTerrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleTerrainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleTerrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
