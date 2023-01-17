import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTerrainFormComponent } from './add-terrain-form.component';

describe('AddTerrainFormComponent', () => {
  let component: AddTerrainFormComponent;
  let fixture: ComponentFixture<AddTerrainFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTerrainFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTerrainFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
