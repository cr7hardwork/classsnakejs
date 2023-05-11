import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLoginActionsComponent } from './header-login-actions.component';

describe('HeaderLoginActionsComponent', () => {
  let component: HeaderLoginActionsComponent;
  let fixture: ComponentFixture<HeaderLoginActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderLoginActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderLoginActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
