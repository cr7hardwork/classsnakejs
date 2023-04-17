import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { ProjectSearchFormComponent } from './project-search-form/project-search-form.component';
import { ProjectListComponent } from './project-list/project-list.component';


@NgModule({
  declarations: [
    SearchComponent,
    ProjectSearchFormComponent,
    ProjectListComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
