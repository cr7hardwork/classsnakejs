import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSearchFormComponent } from './project-search-form.component';

describe('ProjectSearchFormComponent', () => {
  let component: ProjectSearchFormComponent;
  let fixture: ComponentFixture<ProjectSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectSearchFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
