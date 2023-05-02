import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquityRangeInputComponent } from './equity-range-input.component';

describe('EquityRangeInputComponent', () => {
  let component: EquityRangeInputComponent;
  let fixture: ComponentFixture<EquityRangeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquityRangeInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquityRangeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
