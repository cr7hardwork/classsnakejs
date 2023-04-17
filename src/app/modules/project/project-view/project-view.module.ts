import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectViewRoutingModule } from './project-view-routing.module';
import { ProjectViewComponent } from './project-view.component';


@NgModule({
  declarations: [
    ProjectViewComponent
  ],
  imports: [
    CommonModule,
    ProjectViewRoutingModule
  ]
})
export class ProjectViewModule { }
