import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryDrowpdownComponent } from './industry-drowpdown.component';

describe('IndustryDrowpdownComponent', () => {
  let component: IndustryDrowpdownComponent;
  let fixture: ComponentFixture<IndustryDrowpdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustryDrowpdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustryDrowpdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
