import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectUpdateRoutingModule } from './project-update-routing.module';
import { ProjectUpdateComponent } from './project-update.component';


@NgModule({
  declarations: [
    ProjectUpdateComponent
  ],
  imports: [
    CommonModule,
    ProjectUpdateRoutingModule
  ]
})
export class ProjectUpdateModule { }
