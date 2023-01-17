import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoachFormComponent } from './add-coach-form.component';

describe('AddCoachFormComponent', () => {
  let component: AddCoachFormComponent;
  let fixture: ComponentFixture<AddCoachFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCoachFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCoachFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
