import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderActionsConponentComponent } from './header-actions-conponent.component';

describe('HeaderActionsConponentComponent', () => {
  let component: HeaderActionsConponentComponent;
  let fixture: ComponentFixture<HeaderActionsConponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderActionsConponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderActionsConponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
