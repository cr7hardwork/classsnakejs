import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { ProjectSearchFormComponent } from './project-search-form/project-search-form.component';
import { ProjectListComponent } from './project-list/project-list.component';
import {SharedModule} from "@shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import { ProjectListItemComponent } from './project-list/project-list-item/project-list-item.component';


@NgModule({
  declarations: [
    SearchComponent,
    ProjectSearchFormComponent,
    ProjectListComponent,
    ProjectListItemComponent
  ],
  imports: [
    ReactiveFormsModule,
    SharedModule,
    CommonModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
