import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgHeaderComponent } from './bg-header.component';

describe('BgHeaderComponent', () => {
  let component: BgHeaderComponent;
  let fixture: ComponentFixture<BgHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
