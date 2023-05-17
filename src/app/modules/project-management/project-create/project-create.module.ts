import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProjectCreateRoutingModule} from './project-create-routing.module';
import {ProjectCreateComponent} from './project-create.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "@shared/shared.module";


@NgModule({
  declarations: [
    ProjectCreateComponent
  ],
  imports: [
    CommonModule,
    ProjectCreateRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class ProjectCreateModule {
}
