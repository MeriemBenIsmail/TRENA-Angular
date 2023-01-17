import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueTerrainsComponent } from './catalogue-terrains.component';

describe('CatalogueTerrainsComponent', () => {
  let component: CatalogueTerrainsComponent;
  let fixture: ComponentFixture<CatalogueTerrainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogueTerrainsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogueTerrainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
