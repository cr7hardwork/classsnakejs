import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUserActionsComponent } from './header-user-actions.component';

describe('HeaderUserActionsComponent', () => {
  let component: HeaderUserActionsComponent;
  let fixture: ComponentFixture<HeaderUserActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderUserActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderUserActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
