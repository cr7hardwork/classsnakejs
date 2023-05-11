import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectManagementComponent} from './project-management.component';

const routes: Routes = [
  {path: '', component: ProjectManagementComponent},
  {
    path: 'create',
    loadChildren: () => import('./project-create/project-create.module').then(m => m.ProjectCreateModule)
  },
  { path: 'update', loadChildren: () => import('./project-update/project-update.module').then(m => m.ProjectUpdateModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectManagementRoutingModule {
}
