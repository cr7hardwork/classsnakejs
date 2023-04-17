import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUserLoginActionsComponent } from './header-user-login-actions.component';

describe('HeaderUserLoginActionsComponent', () => {
  let component: HeaderUserLoginActionsComponent;
  let fixture: ComponentFixture<HeaderUserLoginActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderUserLoginActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderUserLoginActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
