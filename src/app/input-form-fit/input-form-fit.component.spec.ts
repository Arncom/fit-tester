import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFormFitComponent } from './input-form-fit.component';

describe('InputFormFitComponent', () => {
  let component: InputFormFitComponent;
  let fixture: ComponentFixture<InputFormFitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFormFitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFormFitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
